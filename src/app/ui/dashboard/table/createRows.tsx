import { Employee } from "@/app/lib/definitions";
import Row from "./Row";

interface RowsProps {
  employees: Employee[];
  handleUpdateStatusEmployee: ({ id }: { id: string }) => void;
}

export default function createRows({
  employees,
  handleUpdateStatusEmployee,
}: RowsProps) {
  return employees.map((employee) => (
    <Row key={employee.id} employee={employee} handleUpdateStatusEmployee={handleUpdateStatusEmployee} />
  ));
}
