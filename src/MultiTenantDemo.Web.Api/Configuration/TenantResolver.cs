using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using MultiTenantDemo.Infra;
using MultiTenantDemo.Tenancy.Domain.Tenants;
using SaasKit.Multitenancy;
using System.Threading.Tasks;

namespace MultiTenantDemo.Web.Api.Configuration
{
    public sealed class TenantResolver : ITenantResolver<ITenant>
    {
        private readonly Tenancy.Domain.Tenants.ITenantsRepository _repository;

        public TenantResolver(
            Tenancy.Domain.IRepositoryFactory tenancyRepositoryFactory, 
            IConfigurationRoot config)
        {
            var urlDatabase = config.GetSection("ConnectionStrings:RavenDB").Value;
            _repository = tenancyRepositoryFactory
                            .GetOrCreateTenantsRepository(urlDatabase);
        }
        public Task<TenantContext<ITenant>> ResolveAsync(HttpContext context)
        {
            Tenant tenant = null;
            var tenantAlias = new Microsoft.Extensions.Primitives.StringValues();
            if (context.Request.Headers.TryGetValue("tenant", out tenantAlias))
                tenant = _repository.LoadByAlias(tenantAlias.ToString());
            if(tenant == null)
                return Task.FromResult(null as TenantContext<ITenant>);
            using (var tenantContext = new TenantContext<ITenant>(tenant))
                return Task.FromResult(tenantContext);
        }
    }
}
