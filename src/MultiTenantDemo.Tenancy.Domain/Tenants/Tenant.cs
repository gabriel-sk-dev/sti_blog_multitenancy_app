
using MultiTenantDemo.Infra;
using System;

namespace MultiTenantDemo.Tenancy.Domain.Tenants
{
    public sealed class Tenant : ITenant
    {
        public Tenant(Guid id, string alias, string businessName, string urlDatabase)
        {
            Id = id;
            Alias = alias;
            BusinessName = businessName;
            UrlDatabase = urlDatabase;
        }

        public Guid Id { get; }
        public string Alias { get; }
        public string BusinessName { get; }
        public string UrlDatabase { get; }

        public static Tenant Create(string alias, string businessName, string urlDatabase)
            => new Tenant(Guid.NewGuid(), alias, businessName, urlDatabase);
    }
}
