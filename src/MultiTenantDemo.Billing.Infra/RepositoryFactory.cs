using MultiTenantDemo.Billing.Domain;
using MultiTenantDemo.Billing.Domain.Invoices;
using System.Linq;
using MultiTenantDemo.Infra;
using System.Collections.Concurrent;
using MultiTenantDemo.Billing.Infra.Invoices;

namespace MultiTenantDemo.Billing.Infra
{
    public sealed class RepositoryFactory : IRepositoryFactory
    {
        private static readonly ConcurrentDictionary<string, IInvoicesRepository> _invoicesRepositorys = new ConcurrentDictionary<string, IInvoicesRepository>();

        public IInvoicesRepository GetOrCreateInvoicesRepository(ITenant tenant)
        {
            if (!_invoicesRepositorys.Any(x => x.Key.Equals(tenant.Alias)))
                _invoicesRepositorys.TryAdd(tenant.Alias, new InvoicesRepository(tenant));
            return _invoicesRepositorys[tenant.Alias];
        }
    }
}
