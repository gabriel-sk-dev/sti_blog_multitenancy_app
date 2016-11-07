using System.Collections.Generic;
using Raven.Client.Converters;
using Raven.Client.Document;
using Raven.Client;

namespace ErpMultitenancy.Tenancy.Repository
{
    public sealed class DocumentStoreHolder
    {
        private static DocumentStore _store;
        public DocumentStore Instance { get { return _store; } }

        public DocumentStoreHolder(string url)
        {
            if (_store == null)
            {
                _store = new DocumentStore { Url = url };
                ConfigureConventions();
                Instance.Initialize();
            }
            AlterDatabase("Tenancy");
        }

        public void AlterDatabase(string name)
        {
            _store.DatabaseCommands.GlobalAdmin.EnsureDatabaseExists(name);
            Instance.DefaultDatabase = name;
        }

        public IDocumentSession Open()
        {
            return _store.OpenSession();
        }

        private void ConfigureConventions()
        {
            Instance.Conventions.IdentityTypeConvertors = new List<ITypeConverter> { new GuidConverter() };
            Instance.Conventions.CustomizeJsonSerializer =
                    serializer =>
                    { };
        }
    }
}
