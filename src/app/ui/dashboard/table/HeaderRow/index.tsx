import React from "react";
import { TableHeaderRow, TableHeaderCell } from "@ui5/webcomponents-react";

export default function HeaderRow () {
  return (
    <div >
      <div className="bg-white px-4 py-7">
        <h1 className="text-lg font-bold">All Leave Requests</h1>
        <span className="text-muted-foreground">
          Complete list of team leave requests
        </span>
      </div>
      <TableHeaderRow
        sticky
        className="shadow-md px-2 py-2 text-muted-foreground grid grid-cols-7 text-balance border-b border-gray-200"
      >
        <TableHeaderCell>
          <span className="mx-auto text-center">Employee</span>
        </TableHeaderCell>
        <TableHeaderCell>
          <span className="mx-auto text-center">Type</span>
        </TableHeaderCell>
        <TableHeaderCell className="mx-auto text-center">
          Start Date
        </TableHeaderCell>
        <TableHeaderCell>
          <span className="mx-auto text-center">End Date</span>
        </TableHeaderCell>
        <TableHeaderCell>
          <span className="mx-auto text-center">Days</span>
        </TableHeaderCell>
        <TableHeaderCell>
          <span className="mx-auto text-center">Reason</span>
        </TableHeaderCell>
        <TableHeaderCell className="mx-auto text-center">
          Status
        </TableHeaderCell>
      </TableHeaderRow>
    </div>
  );
}
