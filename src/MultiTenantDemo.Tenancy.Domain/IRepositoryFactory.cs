using MultiTenantDemo.Tenancy.Domain.Tenants;

namespace MultiTenantDemo.Tenancy.Domain
{
    public interface IRepositoryFactory
    {
        ITenantsRepository GetOrCreateTenantsRepository(string urlDatabase);
    }
}
