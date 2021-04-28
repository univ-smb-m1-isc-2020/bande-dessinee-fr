using DbUp;
using DbUp.ScriptProviders;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Net.NetworkInformation;
using System.Text;
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
            Ping pingSender = new Ping();
            PingOptions options = new PingOptions
            {
                DontFragment = true
            };

            // Create a buffer of 32 bytes of data to be transmitted.
            string data = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
            byte[] buffer = Encoding.ASCII.GetBytes(data);
            int timeout = 120;
            PingReply reply = pingSender.Send("postgres", timeout, buffer, options);
            if (reply.Status == IPStatus.Success)
            {
                Console.WriteLine("Address: {0}", reply.Address.ToString());
                Console.WriteLine("RoundTrip time: {0}", reply.RoundtripTime);
                Console.WriteLine("Time to live: {0}", reply.Options.Ttl);
                Console.WriteLine("Don't fragment: {0}", reply.Options.DontFragment);
                Console.WriteLine("Buffer size: {0}", reply.Buffer.Length);
            }
            EnsureDatabase.For.PostgresqlDatabase("Server="+ reply.Address.ToString()+";Port=5432;Database=db_bande_dessinee_fr;User Id=bande_dessinee_fr_root;Password=toor;");

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
