using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ErpMultitenancy.Tenancy.Domain.Tenant;

namespace ErpMultitenancy.API.Controllers.Tenancy
{
    [Route("api/tenancy/[controller]")]
    public class TenantController : Controller
    {
        private readonly ITenancyRepository _tenancyRepository;

        public TenantController(ITenancyRepository tenancyRepository)
        {
            _tenancyRepository = tenancyRepository;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Tenant> Get()
        {
            throw new NotImplementedException();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var tenant = _tenancyRepository.Load(id);
            if (tenant == null)
                return new NotFoundResult();
            return new OkObjectResult(tenant);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]TenantInputModel input)
        {
            var existTenant = _tenancyRepository.Load(input.Prefix);
            if (existTenant != null)
                throw new InvalidOperationException("Tenant prefix is invalid");

            var tenant = new Tenant(Guid.NewGuid(), input.Prefix, input.Name);
            _tenancyRepository.Add(tenant);
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }        
    }

    public class TenantInputModel
    {
        public string Prefix { get; set; }
        public string  Name { get; set; }
    }
}
