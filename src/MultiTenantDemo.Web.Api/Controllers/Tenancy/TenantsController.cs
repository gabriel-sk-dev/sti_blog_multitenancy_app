using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace MultiTenantDemo.Web.Api.Controllers.Tenancy
{
    [Route("api/{area}/[controller]")]
    public class TenantsController : Controller
    {
        private readonly IConfigurationRoot _config;
        private readonly MultiTenantDemo.Tenancy.Domain.IRepositoryFactory _repositoryFactory;

        public TenantsController(
            MultiTenantDemo.Tenancy.Domain.IRepositoryFactory repositoryFactory,
            IConfigurationRoot config)
        {
            _repositoryFactory = repositoryFactory;
            _config = config;
        }

        [HttpGet, Route("{tenantAlias}")]
        public IActionResult Get(string tenantAlias)
        {
            var tenant = _repositoryFactory
                            .GetOrCreateTenantsRepository(_config.GetSection("ConnectionStrings:RavenDB").Value)
                            .LoadByAlias(tenantAlias);
            if (tenant == null)
                return BadRequest("Tenant not found");
            return Ok(tenant);
        }
    }
}
