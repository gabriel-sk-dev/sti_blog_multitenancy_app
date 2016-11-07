using ErpMultitenancy.Tenancy.Domain.Tenant;
using System.Linq;
using System;

namespace ErpMultitenancy.Tenancy.Repository
{
    public sealed class TenancyRepository : ITenancyRepository
    {
        private readonly DocumentStoreHolder _store;

        public TenancyRepository(string url)
        {
            _store = new DocumentStoreHolder(url);
        }

        public void Add(Tenant tenant)
        {
            using (var session = _store.Open())
            {
                session.Store(tenant);
                session.SaveChanges();
            }
        }

        public Tenant Load(string domainPrefix)
        {
            using (var session = _store.Open())
                return session.Query<Tenant>().FirstOrDefault(x => x.DomainPrefix == domainPrefix);
        }
    }
}
