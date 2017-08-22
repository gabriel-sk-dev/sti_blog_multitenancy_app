using System;

namespace MultiTenantDemo.Billing.Domain.Invoices
{
    public sealed class Invoice
    {
        public Invoice(Guid id, string clientInfo, decimal ammount)
        {
            Id = id;
            ClientInfo = clientInfo;
            Ammount = ammount;
        }

        public Guid Id { get; }
        public string ClientInfo { get; }
        public decimal Ammount { get; }

        public static Invoice Create(string clientInfo, decimal ammount)
            => new Invoice(Guid.NewGuid(), clientInfo, ammount);
    }
}
