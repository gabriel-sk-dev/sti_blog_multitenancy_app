using System;
using System.Collections.Generic;

namespace MultiTenantDemo.Tenancy.Domain.Tenants
{
    public interface ITenantsRepository
    {
        Tenant Load(Guid id);
        IEnumerable<Tenant> Load();
        Tenant LoadByAlias(string alias);
        void Save(Tenant tenant);
    }
}
