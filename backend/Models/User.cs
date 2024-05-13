﻿namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string? Username { get; set; }
        public UserRole Role { get; set; }  
        public string? PersonalCode { get; set; }
        public DateTime PersonalCodeGenDate { get; set; }
    }

    public enum UserRole
    {
        Customer,
        Admin
    }
}
