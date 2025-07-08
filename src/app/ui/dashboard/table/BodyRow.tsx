"use client";
import React from "react";
import { TableRow, TableCell, Button, Dialog } from "@ui5/webcomponents-react";

import { dateFormat } from "../../../../utils/helper";
import { RowsProps } from "@/app/lib/definitions";

export default function BodyRow({
  handleUpdateStatusEmployee,
  employees,
}: RowsProps) {
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

  return employees.map((employee) => (
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
        <span className="mx-auto">
          {employee.reason.length > 20
            ? employee.reason.substring(0, 20) + "..."
            : employee.reason}
        </span>
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
  ));
}
