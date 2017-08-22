using System.Collections.Generic;

namespace MultiTenantDemo.Billing.Domain.Invoices
{
    public interface IInvoicesRepository
    {
        IEnumerable<Invoice> Load();
        void Save(Invoice invoice);
    }
}
