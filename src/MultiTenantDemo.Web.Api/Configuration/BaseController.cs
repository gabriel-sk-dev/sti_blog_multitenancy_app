using Microsoft.AspNetCore.Mvc;
using MultiTenantDemo.Infra;

namespace MultiTenantDemo.Web.Api.Configuration
{
    public abstract class BaseController : Controller
    {
        protected readonly ITenant _tenant;

        protected BaseController(ITenant tenant)
        {
            _tenant = tenant;
        }
    }
}
