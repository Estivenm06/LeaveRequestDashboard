"use client";
import React, { useEffect, useState } from "react";
import { Table } from "@ui5/webcomponents-react";
import { IllustratedMessage } from "@ui5/webcomponents-react";

import { Employee } from "@/app/lib/definitions";

import { TableFilter } from "./TableFilter";
import { HeaderRow } from "./HeaderRow";
import { BodyRow } from "./BodyRow";
import { CardDashboard } from "../../components/CardDashboard";
import { Pagination } from "./Pagination";

import { useStore } from "../../store/StoreContext";

import { SkeletonRow } from "./SkeletonRow";
import { SkeletonHeader } from "./SkeletonHeader";
import { PaginationSkeleton } from "./PaginationSkeleton";

export default function TableDashboard() {
  const { data, loading } = useStore();
  const [employees, setEmployees] = useState<Employee[]>(data);
  const [statusFilter, setStatusFilter] = useState<string>("none");
  const [orderStart, setOrderStart] = useState<boolean>(true); // True -> Ascending && False -> Descending
  const [page, setPage] = useState(1);

  useEffect(() => {
    setEmployees(data);
  }, [data]);

  const handleClick = (pageNumber: number) => setPage(pageNumber);
  const handleOrders = (order: boolean) => setOrderStart(order);
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

    let filtered = employees.filter(statusCondition);
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

  const total = paginatedRowsData.length;
  const { approved, pending, rejected } = paginatedRowsData.reduce(
    (acc, employee) => {
      if (employee.status === "APPROVED") acc.approved += 1;
      if (employee.status === "PENDING") acc.pending += 1;
      if (employee.status === "REJECTED") acc.rejected += 1;
      return acc;
    },
    { approved: 0, pending: 0, rejected: 0 }
  );

  return (
    <main className="flex-1 p-6 bg-white">
      {/* Page Header */}
      <div className="flex items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Leave Requests
          </h2>
          <p className="text-muted-foreground">
            Manage and review all team leave requests
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <CardDashboard
          title="Total Requests"
          borderColor="border-l-chart-1"
          icon="document-text"
          number={total}
        />
        <CardDashboard
          title="Pending"
          borderColor="border-l-chart-2"
          icon="away"
          number={pending}
        />
        <CardDashboard
          title="Approved"
          borderColor="border-l-chart-3"
          icon="accept"
          number={approved}
        />
        <CardDashboard
          title="Rejected"
          borderColor="border-l-chart-4"
          icon="decline"
          number={rejected}
        />
      </div>
      <TableFilter
        handleStatus={handleStatus}
        handleOrder={handleOrders}
        orderStart={orderStart}
      />
      <Table
        headerRow={loading ? <SkeletonHeader /> : <HeaderRow />}
        className="shadow-md rounded-lg p-5"
        overflowMode="Scroll"
      >
        {!loading && paginatedRowsData.length === 0 && <IllustratedMessage />}
        {loading ? (
          <>
            {Array.from({ length: pageSize }).map((_, index) => (
              <SkeletonRow key={index} />
            ))}
            <PaginationSkeleton />
          </>
        ) : (
          <>
            <BodyRow
              employees={paginatedRowsData}
              handleUpdateStatusEmployee={handleUpdateStatusEmployee}
            />
            <Pagination
              totalPages={totalPages}
              handleClick={handleClick}
              currentPage={page}
            />
          </>
        )}
      </Table>
    </main>
  );
}
