using Microsoft.AspNetCore.Mvc;
using MultiTenantDemo.Infra;
using MultiTenantDemo.Web.Api.Configuration;

namespace MultiTenantDemo.Web.Api.Controllers.Billing
{
    [Route("api/{area}/[controller]")]
    public class InvoicesController : BaseController
    {
        private readonly MultiTenantDemo.Billing.Domain.IRepositoryFactory _repositoryFactory;

        public InvoicesController(
            ITenant tenant, 
            MultiTenantDemo.Billing.Domain.IRepositoryFactory repositoryFactory) 
            : base(tenant)
        {
            _repositoryFactory = repositoryFactory;
        }

        public IActionResult Get()
            => Ok(_repositoryFactory
                    .GetOrCreateInvoicesRepository(_tenant)
                .Load());
    }
}
