using DbUp;
using DbUp.ScriptProviders;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace api.Tasks
{
    public class DoWorkPostgresDB : IDoWorkPostgresDB
    {
        public DoWorkPostgresDB()
        {
        }

        public async Task DoWork()
        {
            await Task.Delay(30 * 1000);
            EnsureDatabase.For.PostgresqlDatabase("Server=postgres;Port=5432;Database=db_bande_dessinee_fr;User Id=bande_dessinee_fr_root;Password=toor;");

            var upgrader = DeployChanges
                .To
                .PostgresqlDatabase("Server=postgres;Port=5432;Database=db_bande_dessinee_fr;User Id=bande_dessinee_fr_root;Password=toor;")
                .WithScriptsFromFileSystem
            (
                "./Scripts", new FileSystemScriptOptions
                {
                    IncludeSubDirectories = true
                }
            )
                .WithTransactionPerScript()
                .WithVariablesDisabled()
                .LogToConsole()
                .Build();

            var result = upgrader.PerformUpgrade();
            if (!result.Successful)
            {
                Console.WriteLine($"ERROR :{result.Error}");
            }
            Console.WriteLine("Success!");
        }
    }
}
