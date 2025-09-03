"use client";
import React, { useEffect, useState } from "react";
import { Table } from "@ui5/webcomponents-react";
import { IllustratedMessage } from "@ui5/webcomponents-react";

import { Employee } from "@/app/src/lib/definitions";

// Dashboard Components
import HeaderRow from "@/app/ui/dashboard/Table/HeaderRow";
import BodyRow from "../Table/BodyRow";
import TableFilter from "../Table/TableFilter";
import CardDashboard from "@/app/ui/components/CardDashboard";
import Pagination from "../Pagination";

import { useStore } from "../../store/StoreContext";

// Skeletons Components
import SkeletonHeader from "../Skeletons/SkeletonHeader";
import PaginationSkeleton from "../Skeletons/PaginationSkeleton";
import CardMobile from "../CardMobile";
import CardMobileSkeleton from "../Skeletons/CardMobileSkeleton";

export default function Dashboard() {
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
    <main className="flex-1 p-6">
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
      {/* Metric Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
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
      {/* Table Filter */}
      <TableFilter
        handleStatus={handleStatus}
        handleOrder={handleOrders}
        orderStart={orderStart}
      />
      {loading ? (
        <Table
          headerRow={<SkeletonHeader />}
          overflowMode="Scroll"
          className="sm:min-w-0 p-5 hidden lg:flex bg-white rounded-lg"
        />
      ) : (
        <Table
          headerRow={<HeaderRow />}
          overflowMode="Scroll"
          className="sm:min-w-0 p-5 hidden lg:flex bg-white rounded-lg"
        >
          <BodyRow
            employees={paginatedRowsData}
            handleUpdateStatusEmployee={handleUpdateStatusEmployee}
          />
        </Table>
      )}
      {loading ? (
        <div className="lg:hidden">
          {Array.from({ length: 2 }, (_, index) => (
            <CardMobileSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="lg:hidden">
          {paginatedRowsData.map((employee) => (
            <CardMobile
              key={employee.id}
              employee={employee}
              handleUpdateStatusEmployee={handleUpdateStatusEmployee}
            />
          ))}
        </div>
      )}
      {!loading && paginatedRowsData.length === 0 && <IllustratedMessage />}
      {loading ? (
        <PaginationSkeleton />
      ) : (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          handleClick={handleClick}
        />
      )}
    </main>
  );
}
