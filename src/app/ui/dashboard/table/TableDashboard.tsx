"use client";
import React, { useEffect, useState } from "react";

import { TableDashboardProps } from "@/app/lib/definitions";
import { Table } from "@ui5/webcomponents-react";
import { Employee } from "@/app/lib/definitions";

import Pagination from "./Pagination";
import HeaderRow from "./HeaderRow";
import BodyRow from "./BodyRow";

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
  const handleOrders = () => setOrderStart((prev) => !prev);
  const handleStatus = (status: string) => {
    setStatusFilter(status);
    setPage(1);
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

  const filteredEmployees = () => {
    const statusCondition = (employee: Employee) => {
      if (statusFilter === "approved") {
        return employee.status.toLowerCase() === "approved";
      } else if (statusFilter === "pending") {
        return employee.status.toLowerCase() === "pending";
      } else if (statusFilter === "rejected") {
        return employee.status.toLowerCase() === "rejected";
      }
      return true;
    };

    let filtered = employeesLocally.filter(statusCondition);
    const ordered = filtered.sort((a, b) => {
      return orderStart
       ? new Date(a.date_from).getTime() - new Date(b.date_from).getTime()
       : new Date(b.date_from).getTime() - new Date(a.date_from).getTime()
    })
    return BodyRow({employees: ordered, handleUpdateStatusEmployee});
  };

  const rows = filteredEmployees();
  const totalPages = Math.ceil(rows.length / 10);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <main className="w-[70%] mx-auto h-[90vh] overflow-auto">
      <Table
        headerRow={
          <HeaderRow
            handleStatus={handleStatus}
            handleOrder={handleOrders}
            orderStart={orderStart}
          />
        }
        className="shadow-lg rounded-lg h-[80vh] mx-auto overflow-auto"
        overflowMode="Scroll"
        
      >
        {paginatedRows}
      </Table>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={page}
      />
    </main>
  );
}
