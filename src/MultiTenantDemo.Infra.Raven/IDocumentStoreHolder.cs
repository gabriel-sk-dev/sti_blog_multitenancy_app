using Raven.Client;
using Raven.Client.Document;

namespace MultiTenantDemo.Infra.Raven
{
    public interface IDocumentStoreHolder
    {
        IDocumentSession OpenSession();
        DocumentStore Instance { get; }
    }
}
