"use client";
import React, { useEffect, useState } from "react";

import { Table } from "@ui5/webcomponents-react";

import { TableDashboardProps } from "@/app/lib/definitions";
import { Employee } from "@/app/lib/definitions";
import Pagination from "./Pagination";
import HeaderRow from "./HeaderRow";
import BodyRow from "./BodyRow";
import { SkeletonRow } from "./SkeletonRow";
import { SkeletonHeader } from "./SkeletonHeader";

export default function TableDashboard({
  employees,
  loading,
}: TableDashboardProps) {
  const [employeesLocally, setEmployees] = useState<Employee[]>(employees);
  const [statusFilter, setStatusFilter] = useState<string>("none");
  const [orderStart, setOrderStart] = useState<boolean>(true); // True -> Ascending && False -> Descending
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!loading && employees.length === 0) {
      const employeesLocal = localStorage.getItem("employeesLocal");
      if (employeesLocal) {
        setEmployees(JSON.parse(employeesLocal));
      }
    } else if (
      !loading &&
      employees.length > 0 &&
      employeesLocally.length === 0
    ) {
      setEmployees(employees);
    }
  }, [loading, employees, employeesLocally.length]);

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
        : new Date(b.date_from).getTime() - new Date(a.date_from).getTime();
    });
    return ordered;
  };

  const rowsData = filteredEmployees();
  const totalPages = Math.ceil(rowsData.length / 10);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let paginatedRowsData = rowsData.slice(startIndex, endIndex);

  return (
    <main className="md:w-[70%] sm:mx-5 sm:my-5 md:my-0 md:mx-auto md:h-[90vh] overflow-auto">
      <Table
        headerRow={
          loading ? (
            <SkeletonHeader />
          ) : (
            <HeaderRow
              handleStatus={handleStatus}
              handleOrder={handleOrders}
              orderStart={orderStart}
            />
          )
        }
        className="shadow-lg rounded-lg h-[100vh] md:h-[80vh] mx-auto overflow-auto"
        overflowMode="Scroll"
        noData={
          !loading && rowsData.length === 0 ? (
            <div className="p-5 bg-red-500 flex justify-center items-center mx-auto rounded-sm shadow-md">
              Error not data supplied
            </div>
          ) : undefined
        }
      >
        {loading ? (
          Array.from({ length: pageSize }).map((_, index) => (
            <SkeletonRow key={index} />
          ))
        ) : (
          <BodyRow
            employees={paginatedRowsData}
            handleUpdateStatusEmployee={handleUpdateStatusEmployee}
          />
        )}
      </Table>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        currentPage={page}
      />
    </main>
  );
}
