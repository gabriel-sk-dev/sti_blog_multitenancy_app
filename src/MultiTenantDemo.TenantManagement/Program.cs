using MultiTenantDemo.Billing.Domain.Invoices;
using MultiTenantDemo.Billing.Infra.Invoices;
using MultiTenantDemo.Tenancy.Domain.Tenants;
using MultiTenantDemo.Tenancy.Infra.Tenants;
using System;

namespace MultiTenantDemo.TenantManagement
{
    class Program
    {
        static void Main()
        {
            Console.Write("Informe o alias do tenant: ");
            var tenantAlias = Console.ReadLine();
            Console.Write("Informe o nome do tenant: ");
            var tenantBusiness = Console.ReadLine();
            Console.Write("Informe a url para database do tenant: ");
            var tenantDatabase = Console.ReadLine();

            var urlDatabase = "http://gabriel-nt:8080";
            var repository = new TenantsRepository(urlDatabase);
            var tenant = Tenant.Create(tenantAlias, tenantBusiness, tenantDatabase);
            repository.Save(tenant);

            var canExit = false;
            while (!canExit)
            {
                Console.WriteLine("Inclusão de fatura");
                Console.WriteLine("");

                Console.Write("Informe o nome do cliente: ");
                var clientInfo = Console.ReadLine();
                Console.Write("Informe o valor da fatura: ");
                var ammount = Convert.ToDecimal(Console.ReadLine());
                var invoice = Invoice.Create(clientInfo, ammount);
                var invoiceRepository = new InvoicesRepository(tenant);
                invoiceRepository.Save(invoice);

                Console.WriteLine();
                Console.Write("Incluir outra invoice? ");
                var pressKey = Console.ReadKey();
                if (pressKey.Key == ConsoleKey.N)
                    canExit = true;
                Console.Clear();
            }
            

            Console.Read();
        }
    }
}
