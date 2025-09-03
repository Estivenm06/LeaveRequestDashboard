"use client";
import React, { useState } from "react";
import { TableRow, TableCell, Button, Dialog } from "@ui5/webcomponents-react";
import { Avatar } from "@ui5/webcomponents-react";

import { dateFormat, daysLeft } from "@/app/src/utils/helper";
import { RowsProps } from "@/app/src/lib/definitions";
import StatusBtn from "@/app/ui/dashboard/Table/StatusBtn";

export default function BodyRow ({
  handleUpdateStatusEmployee,
  employees,
}: RowsProps) {
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
      className="hover:bg-gray-100 transition-colors duration-200 grid grid-cols-7 px-4 py-0.5 border-b border-gray-200"
    >
      <TableCell className="flex items-center gap-1 px-0.5 py-1">
        <Avatar size="XS" colorScheme="Accent10" />
        <div className="leading-tight">
          <p className="text-sm font-medium">{employee.name.length > 10 ? employee.name.substring(0,10) + '...' : employee.name}</p>
          <span className="text-muted-foreground text-xs">Submitted {dateFormat(employee.createdAt)}</span>
        </div>
      </TableCell>
      <TableCell>
        <p className="lowercase mx-auto py-0.5 px-2 border-1 border-gray-300 rounded-lg">{employee.type_of_leave}</p>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{dateFormat(employee.date_from)}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{dateFormat(employee.date_to)}</span>
      </TableCell>
      <TableCell>
        <span className="mx-auto">{daysLeft(employee.date_from, employee.date_to)} Days</span>
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
        <StatusBtn id={employee.id} status={employee.status} handleClick={handleUpdateStatusEmployee} />
      </TableCell>
    </TableRow>
  ));
}