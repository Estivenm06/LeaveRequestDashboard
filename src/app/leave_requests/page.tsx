'use client';
import { useGetData } from "@/hooks/useGetData";
import TableDashboard from "../ui/dashboard/table/TableDashboard";

export default function Page() {
  const { data, loading, error } = useGetData();
    
  return <TableDashboard employees={data} loading={loading} />
}
