using MultiTenantDemo.Tenancy.Domain.Tenants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiTenantDemo.Tenancy.Infra.Tenants
{
    public sealed class TenantsRepository : ContextBaseRepository, ITenantsRepository
    {
        public TenantsRepository(string urlDatabase)
            :base(urlDatabase)
        {}

        public IEnumerable<Tenant> Load()
        {
            using (var session = _store.OpenSession())
                return session.Query<Tenant>();
        }

        public Tenant Load(Guid id)
        {
            using (var session = _store.OpenSession())
                return session.Load<Tenant>(id);
        }

        public Tenant LoadByAlias(string alias)
        {
            using (var session = _store.OpenSession())
                return session.Query<Tenant>().FirstOrDefault(t => t.Alias == alias);
        }

        public void Save(Tenant tenant)
        {
            using (var session = _store.OpenSession())
            {
                session.Store(tenant);
                session.SaveChanges();
            }
        }
    }
}
