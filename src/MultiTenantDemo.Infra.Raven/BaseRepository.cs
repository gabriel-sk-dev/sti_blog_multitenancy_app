namespace MultiTenantDemo.Infra.Raven
{
    public abstract class BaseRepository
    {
        protected readonly string _urlDatabase;
        protected readonly string _context;
        protected readonly BaseDocumentStoreHolder _store;

        protected BaseRepository(string contextName, string urlDatabase)
        {
            _context = contextName;
            _urlDatabase = urlDatabase;
            _store = CreateStore();
        }

        protected abstract BaseDocumentStoreHolder CreateStore();
    }
}
