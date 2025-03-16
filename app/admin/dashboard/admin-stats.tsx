interface StatsProps {
  stats: {
    totalUsers: number;
    totalSummaries: number;
    totalRevenue: number;
    activeSubscriptions: number;
  };
}

export function AdminStats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value={stats.totalUsers}
        description="Total registered users"
      />
      <StatCard
        title="Active Subscriptions"
        value={stats.activeSubscriptions}
        description="Current paid users"
      />
      <StatCard
        title="Total Summaries"
        value={stats.totalSummaries}
        description="PDFs processed"
      />
      <StatCard
        title="Total Revenue"
        value={`$${stats.totalRevenue.toFixed(2)}`}
        description="Lifetime revenue"
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string | number;
  description: string;
}) {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 truncate">
              {title}
            </p>
            <p className="mt-1 text-3xl font-semibold text-emerald-600">
              {value}
            </p>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
