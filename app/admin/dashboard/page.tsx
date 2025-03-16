import { getAdminData } from "./actions";
import { DataTable } from "./data-table";
import { userColumns, summaryColumns, paymentColumns } from "./columns";
import { AdminStats } from "./admin-stats";

export default async function AdminDashboard() {
  const { users, summaries, payments, stats } = await getAdminData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <AdminStats stats={stats} />

      <div className="mt-10 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          <DataTable columns={userColumns} data={users} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Summaries</h2>
          <DataTable columns={summaryColumns} data={summaries} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Payments</h2>
          <DataTable columns={paymentColumns} data={payments} />
        </div>
      </div>
    </div>
  );
}
