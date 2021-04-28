using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;


namespace api.Tasks
{
    public class PostgresDBTask : IHostedService
    {
        private readonly IDoWorkPostgresDB _doWorkPostgresDB;

        public PostgresDBTask(IDoWorkPostgresDB doWorkPostgresDB)
        {
            _doWorkPostgresDB = doWorkPostgresDB;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _doWorkPostgresDB.DoWork();
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
