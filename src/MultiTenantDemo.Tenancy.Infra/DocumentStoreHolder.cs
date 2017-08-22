using MultiTenantDemo.Infra.Raven;
using System.Reflection;
using Raven.Client.Converters;
using System.Collections.Generic;
using Raven.Client.Indexes;
using Raven.Imports.Newtonsoft.Json;

namespace MultiTenantDemo.Tenancy.Infra
{
    public class DocumentStoreHolder : BaseDocumentStoreHolder
    {
        public DocumentStoreHolder(string urlDatabase)
            : base(urlDatabase)
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
