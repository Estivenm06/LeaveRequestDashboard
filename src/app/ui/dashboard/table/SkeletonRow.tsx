import React from 'react';

import { TableCell, TableRow } from "@ui5/webcomponents-react";

const SkeletonRow = () => (
  <TableRow className="hover:bg-gray-100 transition-colors duration-200 p-5 grid grid-cols-6 animate-pulse">
    <TableCell>
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </TableCell>
    <TableCell>
      <div className="h-4 bg-gray-200 rounded w-full mx-auto"></div>
    </TableCell>
    <TableCell>
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
    </TableCell>
  </TableRow>
);

export { SkeletonRow };
