import React from "react";
import { TableHeaderRow, TableHeaderCell } from "@ui5/webcomponents-react";

export default function SkeletonHeader() {
  return (
    <TableHeaderRow
      sticky
      className="hover:bg-gray-300 bg-gray-200 transition-colors duration-200 p-5 grid grid-cols-7 animate-pulse space-x-5"
    >
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-500 rounded w-20 mx-auto"></div>
      </TableHeaderCell>
    </TableHeaderRow>
  );
}
