"use client";
import React from 'react';
import { TableRow, TableCell, Button } from "@ui5/webcomponents-react";
import { format } from "date-fns";

import { Employee } from "@/app/lib/definitions";

interface RowProps {
  employee: Employee;
  handleUpdateStatusEmployee: ({ id }: { id: string }) => void;
}

export default function Row({
  handleUpdateStatusEmployee,
  employee,
}: RowProps) {
  const styleRejected = "bg-red-500 hover:bg-red-600";
  const stylePending = "bg-yellow-500 hover:bg-yellow-600";
  const styleApproved = "bg-green-500 hover:bg-green-600";
  const style = (status: string) => {
    let styleButton = "";
    switch (status.toUpperCase()) {
      case "PENDING":
        return (styleButton += stylePending);
      case "APPROVED":
        return (styleButton += styleApproved);
      case "REJECTED":
        return (styleButton += styleRejected);
      default:
        return styleButton;
    }
  };

  const dateFormat = (dateEmployee: string) => {
    return format(new Date(dateEmployee), "MM/dd/yyyy");
  };

  return (
    <TableRow className="hover:bg-gray-100 transition-colors duration-200 p-5 grid grid-cols-6">
      <TableCell>
        <span className="mx-auto">{employee.name}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{employee.type_of_leave}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{dateFormat(employee.date_from)}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{dateFormat(employee.date_to)}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{employee.reason}</span>
      </TableCell>
      <TableCell>
        <Button
          onClick={() =>
            employee.status.toLowerCase() !== "pending" &&
            handleUpdateStatusEmployee({ id: employee.id })
          }
          className={`${style(
            employee.status
          )} mx-auto select-none text-white p-2 shrink-0 shadow-md`}
        >
          {employee.status.toUpperCase()}
        </Button>
      </TableCell>
    </TableRow>
  );
}
