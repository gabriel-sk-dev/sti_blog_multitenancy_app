using MultiTenantDemo.Infra;
using MultiTenantDemo.Infra.Raven;

namespace MultiTenantDemo.Billing.Infra
{
    public class ContextBaseRepository : BaseRepositoryPerTenant
    {
        public ContextBaseRepository(ITenant tenant)
            : base(nameof(Billing), tenant)
        {
        }

        protected override BaseDocumentStoreHolderPerTenant CreateStore()
        {
            return DocumentStoreHolderFactory.CreateOrGet<DocumentStoreHolder>(_context, _tenant);
        }
    }
}
