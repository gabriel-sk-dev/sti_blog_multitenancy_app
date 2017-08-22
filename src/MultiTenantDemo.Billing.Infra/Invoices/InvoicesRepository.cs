using MultiTenantDemo.Billing.Domain.Invoices;
using System.Collections.Generic;
using MultiTenantDemo.Infra;

namespace MultiTenantDemo.Billing.Infra.Invoices
{
    public sealed class InvoicesRepository : ContextBaseRepository, IInvoicesRepository
    {
        public InvoicesRepository(ITenant tenant) : base(tenant)
        {
        }

        public IEnumerable<Invoice> Load()
        {
            using (var session = _store.OpenSession())
                return session.Query<Invoice>();
        }

        public void Save(Invoice invoice)
        {
            using (var session = _store.OpenSession())
            {
                session.Store(invoice);
                session.SaveChanges();
            }
        }
    }
}
