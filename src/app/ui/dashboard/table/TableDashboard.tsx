"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Table } from "@ui5/webcomponents-react";
import HeaderRow from "./HeaderRow";
import { Employee } from "@/app/lib/definitions";
import createRows from "./createRows";

interface TableDashboardProps {
  employees: Employee[];
}

export default function TableDashboard({ employees }: TableDashboardProps) {
  const [employeesLocally, setEmployees] = useState<Employee[]>(employees);
  const [statusFilter, setStatusFilter] = useState<string>("none");
  const [orderStart, setOrderStart] = useState<boolean>(true); // True -> Ascending && False -> Descending
  const [page, setPage] = useState(1);

  useEffect(() => {
    const employeesLocal = localStorage.getItem("employeesLocal");
    if (employeesLocal) {
      setEmployees(JSON.parse(employeesLocal));
    }
  }, []);

  const handleClick = (pageNumber: number) => setPage(pageNumber);
  const handleStatus = (status: string) => {
    setStatusFilter(status);
    setPage(1);
  };

  const handleOrders = () => {
    return {
      orderStart,
      handleOrderStart: () => setOrderStart((prev) => !prev),
    };
  };

  const handleUpdateStatusEmployee = ({ id }: { id: string }) => {
    setEmployees((prev) => {
      const updatedEmployees = prev.map((employee) => {
        if (employee.id === id) {
          if (employee.status.toLowerCase() === "rejected") {
            return { ...employee, status: "APPROVED" };
          } else if (employee.status.toLowerCase() === "approved") {
            return { ...employee, status: "REJECTED" };
          } else {
            return employee;
          }
        } else {
          return employee;
        }
      });
      localStorage.setItem("employeesLocal", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  const filterOrderStartDate = () => {
    if (orderStart) {
      return createRows({
        employees: employeesLocally.sort(
          (a, b) =>
            new Date(a.date_from).getTime() - new Date(b.date_from).getTime()
        ),
        handleUpdateStatusEmployee,
      });
    } else {
      return createRows({
        employees: employeesLocally.sort(
          (a, b) =>
            new Date(b.date_from).getTime() - new Date(a.date_from).getTime()
        ),
        handleUpdateStatusEmployee,
      });
    }
  };

  const filteredEmployees = () => {
    let filtered;
    if (statusFilter === "approved") {
      filtered = createRows({
        employees: employeesLocally.filter(
          (employee) =>
            employee.status.toLowerCase() === "approved" &&
            filterOrderStartDate()
        ),
        handleUpdateStatusEmployee,
      });
    } else if (statusFilter === "pending") {
      filtered = createRows({
        employees: employeesLocally.filter(
          (employee) =>
            employee.status.toLowerCase() === "pending" &&
            filterOrderStartDate()
        ),
        handleUpdateStatusEmployee,
      });
    } else if (statusFilter === "rejected") {
      filtered = createRows({
        employees: employeesLocally.filter(
          (employee) =>
            employee.status.toLowerCase() === "rejected" &&
            filterOrderStartDate()
        ),
        handleUpdateStatusEmployee,
      });
    } else {
      filtered = filterOrderStartDate();
    }
    return filtered;
  };

  const rows = filteredEmployees();
  const totalPages = Math.ceil(rows.length / 10);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <>
      <Table
        headerRow={
          <HeaderRow handleStatus={handleStatus} handleOrder={handleOrders} />
        }
        className="shadow-lg rounded-lg"
      >
        {paginatedRows}
      </Table>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={page}
      />
    </>
  );
}
