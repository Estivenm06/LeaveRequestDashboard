import React from "react";
import { TableHeaderRow, TableHeaderCell } from "@ui5/webcomponents-react";

function SkeletonHeader() {
  return (
    <TableHeaderRow
      sticky
      className="hover:bg-gray-100 transition-colors duration-200 p-5 grid grid-cols-6 animate-pulse"
    >
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
      <TableHeaderCell>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </TableHeaderCell>
    </TableHeaderRow>
  );
}

export {
    SkeletonHeader
}