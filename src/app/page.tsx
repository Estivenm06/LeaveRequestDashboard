import { getData } from "./lib/data";
import TableDashboard from "./ui/dashboard/table/TableDashboard";

export default async function Page() {
  const employees = (await getData()) || [];

  return (
    <div className="container mx-auto p-5">
      <TableDashboard employees={employees} />
    </div>
  );
}
