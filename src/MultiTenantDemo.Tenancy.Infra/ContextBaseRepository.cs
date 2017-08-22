using MultiTenantDemo.Infra.Raven;

namespace MultiTenantDemo.Tenancy.Infra
{
    public class ContextBaseRepository : BaseRepository
    {
        public ContextBaseRepository(string urlDatabase)
            : base(nameof(Tenancy), urlDatabase) { }

        protected override BaseDocumentStoreHolder CreateStore()
        {
            return DocumentStoreHolderFactory.CreateOrGet<DocumentStoreHolder>(_context, _urlDatabase );
        }
    }
}
