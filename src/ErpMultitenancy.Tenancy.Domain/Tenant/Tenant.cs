using System;

namespace ErpMultitenancy.Tenancy.Domain.Tenant
{
    public sealed class Tenant
    {
        public Guid Id { get; private set; }
        public string DomainPrefix { get; private set; }
        public string Name { get; private set; }

        public Tenant(Guid id, string domainPrefix, string name)
        {
            Id = id;
            DomainPrefix = domainPrefix;
            Name = name;
        
        }
    }
}
