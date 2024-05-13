using backend.Models;

namespace backend
{
    public static class Extensions
    {
        public static string GeneratePersonalCode(this User user)
        {
            var letters = new string[2];
            var numbers = new string[5];

            var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var possibleNumbers = "123456789";

            GenerateRandomValues(letters, possibleLetters);
            GenerateRandomValues(numbers, possibleNumbers);

            return string.Join("", letters) + string.Join("", numbers) + user.Login[0].ToString().ToUpper();
        }

        private static void GenerateRandomValues(string[] genArray, string possibleCharacters)
        {
            var random = new Random();

            for (int i = 0; i < genArray.Length; i++)
            {
                var randomLetter = possibleCharacters[random.Next(possibleCharacters.Length)];
                genArray[i] = randomLetter.ToString();
            }
        }
    }
}
