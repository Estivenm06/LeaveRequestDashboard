"use client";
import React, { useState } from "react";
import { TableRow, TableCell, Button, Dialog } from "@ui5/webcomponents-react";

import { dateFormat } from "../../../../utils/helper";
import { RowsProps } from "@/app/lib/definitions";
import { IconBtn } from "./IconBtn";

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

  const [openDialogForEmployee, setOpenDialogForEmployee] = useState<{
    [id: string]: boolean;
  }>({});

  const handleOpenDialog = (employeeId: string) => {
    setOpenDialogForEmployee((prev) => ({
      ...prev,
      [employeeId]: true,
    }));
  };
  const handleCloseDialog = (employeeId: string) => {
    setOpenDialogForEmployee((prev) => ({
      ...prev,
      [employeeId]: false,
    }));
  };

  return employees.map((employee) => (
    <TableRow
      key={employee.id}
      className="hover:bg-gray-100 transition-colors md:p-1.5 duration-200 grid grid-cols-6 p-5"
    >
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
      <TableCell className="cell-dialog">
        <span
          className="mx-auto cursor-pointer"
          onClick={() => handleOpenDialog(employee.id)}
        >
          {employee.reason.length > 20
            ? employee.reason.substring(0, 20) + "..."
            : employee.reason}
        </span>
        <Dialog
          headerText={`Reason for ${employee.name}`}
          open={openDialogForEmployee[employee.id] || false}
          onClose={() => handleCloseDialog(employee.id)}
        >
          <span className="p-1">{employee.reason}</span>{" "}
          <div slot="footer" className="p-1">
            <Button onClick={() => handleCloseDialog(employee.id)}>
              Close
            </Button>
          </div>
        </Dialog>
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
          <>
            <IconBtn status={employee.status} />
            {employee.status.toUpperCase()}
          </>
        </Button>
      </TableCell>
    </TableRow>
  ));
}
