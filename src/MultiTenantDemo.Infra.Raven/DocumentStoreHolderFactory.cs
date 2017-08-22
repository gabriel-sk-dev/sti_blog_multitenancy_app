using System;
using System.Collections.Generic;
using System.Linq;

namespace MultiTenantDemo.Infra.Raven
{
    public static class DocumentStoreHolderFactory
    {
        private static readonly object _lock = new object();
        private readonly static Dictionary<string, object> _stores = new Dictionary<string, object>();

        public static T CreateOrGet<T>(string context, string urlDatabase)
            => DefaultCreateOrGet<T>(context, urlDatabase);

        public static T CreateOrGet<T>(string context, ITenant tenant)
            => DefaultCreateOrGet<T>($"{context}.{tenant.Alias}", tenant);

        private static T DefaultCreateOrGet<T>(string key, object documentStoreParam)
        {
            lock (_lock)
            {
                var store = _stores.FirstOrDefault(x => x.Key.Equals(key)).Value;
                if (store == null)
                {
                    var parameters = new object[] { documentStoreParam };

                    var types = new Type[] { documentStoreParam.GetType() };

                    store = typeof(T).GetConstructor(types).Invoke(parameters);
                    _stores.Add(key, store);
                }
                return (T)store;
            }
        }
    }
}
