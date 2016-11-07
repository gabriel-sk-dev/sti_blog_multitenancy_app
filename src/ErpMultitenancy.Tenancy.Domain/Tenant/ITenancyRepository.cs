namespace ErpMultitenancy.Tenancy.Domain.Tenant
{
    public interface ITenancyRepository
    {
        void Add(Tenant tenant);
        Tenant Load(string domainPrefix);
    }
}
