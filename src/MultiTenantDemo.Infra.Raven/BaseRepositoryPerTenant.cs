namespace MultiTenantDemo.Infra.Raven
{
    public abstract class BaseRepositoryPerTenant
    {
        protected readonly ITenant _tenant;
        protected readonly string _context;
        protected readonly BaseDocumentStoreHolderPerTenant _store;

        protected BaseRepositoryPerTenant(string contextName, ITenant tenant)
        {
            _tenant = tenant;
            _context = contextName;
            _store = CreateStore();
        }

        protected abstract BaseDocumentStoreHolderPerTenant CreateStore();
    }
}
