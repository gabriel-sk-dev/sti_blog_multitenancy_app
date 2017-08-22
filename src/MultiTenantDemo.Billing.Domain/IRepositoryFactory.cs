using MultiTenantDemo.Billing.Domain.Invoices;
using MultiTenantDemo.Infra;

namespace MultiTenantDemo.Billing.Domain
{
    public interface IRepositoryFactory
    {
        IInvoicesRepository GetOrCreateInvoicesRepository(ITenant tenant);
    }
}
