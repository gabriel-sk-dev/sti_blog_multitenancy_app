using MultiTenantDemo.Tenancy.Domain;
using System.Linq;
using MultiTenantDemo.Tenancy.Domain.Tenants;
using System.Collections.Concurrent;
using MultiTenantDemo.Tenancy.Infra.Tenants;

namespace MultiTenantDemo.Tenancy.Infra
{
    public sealed class RepositoryFactory : IRepositoryFactory
    {
        private static readonly ConcurrentDictionary<string, ITenantsRepository> _tenantsRepositorys = new ConcurrentDictionary<string, ITenantsRepository>();
        private const string _contextName = nameof(Tenancy);

        public ITenantsRepository GetOrCreateTenantsRepository(string urlDatabase)
        {
            if (!_tenantsRepositorys.Any(x => x.Key.Equals(_contextName)))
                _tenantsRepositorys.TryAdd(_contextName, new TenantsRepository(urlDatabase));
            return _tenantsRepositorys[_contextName];
        }
    }
}
