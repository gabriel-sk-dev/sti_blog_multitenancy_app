using Raven.Client;
using Raven.Client.Document;

namespace MultiTenantDemo.Infra.Raven
{
    public abstract class BaseDocumentStoreHolderPerTenant : IDocumentStoreHolder
    {
        protected const string DATABASEPREFIX = nameof(MultiTenantDemo);
        private readonly ITenant _tenant;
        private DocumentStore _store;
        public DocumentStore Instance => _store;
        public static string Contexto { get; set; }
        public virtual string DatabaseSufix => _tenant.Alias;


        protected BaseDocumentStoreHolderPerTenant(ITenant tenant)
        {
            _tenant = tenant;
            CreateStore(tenant);
            ConfigureConventions();
        }

        public IDocumentSession OpenSession()
            => _store.OpenSession();

        protected void CreateStore(ITenant tenant)
        {
            _store = new DocumentStore { Url = tenant.UrlDatabase };
            _store.Initialize();
            _store
                 .DatabaseCommands
                 .GlobalAdmin
                 .EnsureDatabaseExists($"{DATABASEPREFIX}-{DatabaseSufix}", ignoreFailures: false);
            _store.DefaultDatabase = $"{DATABASEPREFIX}-{DatabaseSufix}";
        }

        protected abstract void ConfigureConventions();
    }
}
