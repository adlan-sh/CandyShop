using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace backend.Service
{
    public class PayService
    {
        private HttpClient _httpClient;
        private static readonly string Id = "383439"; // надо будет в конфиге спрятать этот ID (это ID магазина)
        private static readonly string Key = "test_rhrXWIcT__OD2tdQCgjnE39-bOio1zRigwONrNq-jqs"; // с ключом также 

        public PayService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public bool CheckPayment(string paymentId)
        {
            var requestUri = $"https://api.yookassa.ru/v3/payments/{paymentId}";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(requestUri);
            request.Headers.Add(HttpRequestHeader.Authorization,
                "Basic " + Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes($"{Id}:{Key}")));
            request.ContentType = "application/json";

            var responseData = new byte[1024];
            var stream = request.GetResponse().GetResponseStream();

            var content = new StringBuilder();
            int bytes;  // количество полученных байтов
            do
            {
                // получаем данные
                bytes = stream.Read(responseData);
                // преобразуем в строку и добавляем ее в StringBuilder
                content.Append(Encoding.UTF8.GetString(responseData, 0, bytes));
            }
            while (bytes > 0); // пока данные есть в потоке 

            var json = content.ToString();

            var reader = new JsonTextReader(new StringReader(json));

            var payData = JsonSerializer.Create().Deserialize<Payment>(reader);

            return payData.Paid;
        }


        [JsonObject]
        public class Payment
        {
            [JsonProperty("id")]
            public string PaymentId { get; set; }

            /// <summary>
            /// Может иметь одно из 4 значений:
            /// <list type="bullet"><c>pending</c> - ожидание действий пользователя</list>
            /// <list type="bullet"><c>waiting_for_capture</c> - деньги на счете покупателя заморожены,
            /// ожидание наших действий по списанию или отмене</list>
            /// <list type="bullet"><c>succeeded</c> - платеж прошел успешно</list>
            /// <list type="bullet"><c>canceled</c> - платеж отменен</list>
            /// </summary>
            public string Status { get; set; }

            public bool Paid { get; set; }

            public MoneyAmount Amount { get; set; }

            [JsonProperty("income_amount")]
            public MoneyAmount IncomeAmount { get; set; }

            public PaymentConfirmation Confirmation { get; set; }

            [JsonProperty("captured_at")]
            public DateTime CapturedAt { get; set; }

            [JsonProperty("created_at")]
            public DateTime CreatedAt { get; set; }

            [JsonProperty("expires_at")]
            public DateTime ExpiresAt { get; set; }

            public string Description { get; set; }

            public Dictionary<string, object> Metadata { get; set; }

            [JsonProperty("payment_method")]
            public PaymentMethod PaymentMethod { get; set; }

            public Recipient Recipient { get; set; }

            public bool Refundable { get; set; }

            public bool Test { get; set; }

            [JsonIgnore]
            public bool IsOver { get; set; } = false;
        }

        [JsonObject]
        public class MoneyAmount
        {
            public decimal Value { get; set; }
            public string Currency { get; set; }
        }

        [JsonObject]
        public class PaymentConfirmation
        {
            public string Type { get; set; }

            [JsonProperty("confirmation_url")]
            public string ConfirmationUrl { get; set; }
        }

        [JsonObject]
        public class PaymentMethod
        {
            public string Type { get; set; }

            [JsonProperty("confirmation_url")]
            public string ConfirmationUrl { get; set; }
        }

        [JsonObject]
        public class Recipient
        {
            [JsonProperty("account_id")]
            public string AccountId { get; set; }

            [JsonProperty("gateway_id")]
            public string GatewayId { get; set; }
        }
    }
}
