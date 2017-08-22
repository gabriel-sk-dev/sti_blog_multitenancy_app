using Raven.Client;
using Raven.Client.Document;

namespace MultiTenantDemo.Infra.Raven
{
    public abstract class BaseDocumentStoreHolder : IDocumentStoreHolder
    {
        protected const string DATABASEPREFIX = nameof(MultiTenantDemo);
        private DocumentStore _store;
        public DocumentStore Instance => _store;
        public static string Contexto { get; set; }
        public virtual string DatabaseSufix => "";

        protected BaseDocumentStoreHolder(string urlDatabase)
        {
            CreateStore(urlDatabase);
            ConfigureConventions();
        }

        public IDocumentSession OpenSession()
            => _store.OpenSession();

        protected void CreateStore(string urlDatabase)
        {
            _store = new DocumentStore { Url = urlDatabase };
            _store.Initialize();
            _store
                 .DatabaseCommands
                 .GlobalAdmin
                 .EnsureDatabaseExists($"{DATABASEPREFIX}{DatabaseSufix}", ignoreFailures: false);
            _store.DefaultDatabase = $"{DATABASEPREFIX}{DatabaseSufix}";
        }

        protected abstract void ConfigureConventions();
    }
}
