using DbUp;
using DbUp.ScriptProviders;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.Threading;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new Thread(new ThreadStart(() =>
            {
                var connectionString = "Server=10.5.0.3;Port=5432;Database=bande_dessinee_fr;User Id=postgres;Password=example;";
                EnsureDatabase.For.PostgresqlDatabase(connectionString);

                var upgrader = DeployChanges
                    .To
                    .PostgresqlDatabase(connectionString)
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
                Console.WriteLine(result.ToString());
                if (!result.Successful)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine(result.Error);
                    Console.ResetColor();
                    Console.ReadLine();
                }

                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Success!");
                Console.ResetColor();
            })).Start();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
