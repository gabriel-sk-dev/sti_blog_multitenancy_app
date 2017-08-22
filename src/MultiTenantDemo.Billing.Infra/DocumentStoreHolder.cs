using MultiTenantDemo.Infra;
using MultiTenantDemo.Infra.Raven;
using Raven.Client.Converters;
using Raven.Client.Indexes;
using Raven.Imports.Newtonsoft.Json;
using System.Collections.Generic;
using System.Reflection;

namespace MultiTenantDemo.Billing.Infra
{
    public class DocumentStoreHolder : BaseDocumentStoreHolderPerTenant
    {
        public DocumentStoreHolder(ITenant tenant)
            : base(tenant)
        {
            var asm = Assembly.GetExecutingAssembly();
            IndexCreation.CreateIndexes(asm, Instance);
        }

        protected override void ConfigureConventions()
        {
            Instance.Conventions.IdentityTypeConvertors = new List<ITypeConverter>
            {
                new GuidConverter()
            };

            Instance.Conventions.CustomizeJsonSerializer = serializer =>
            {

            };

            Instance.Conventions.FindTypeTagName = t =>
            {
                return Raven.Client.Util.Inflector.Pluralize(t.Name);
            };

            var _serializer = Instance.Conventions.CreateSerializer();
            _serializer.TypeNameHandling = TypeNameHandling.All;
        }
    }
}
