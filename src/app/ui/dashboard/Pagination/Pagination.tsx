"use client";
import React from "react";
import { Button } from "@ui5/webcomponents-react";
import { PaginationProps } from "@/app/src/lib/definitions";

export default function Pagination({
  totalPages,
  currentPage,
  handleClick,
}: PaginationProps) {
  return (
    <div className="flex flex-row justify-center items-center mt-4 gap-2 md:gap-5">
      {new Array(totalPages).fill("").map((_, index) => (
        <Button
          key={index}
          onClick={() => handleClick(index + 1, currentPage)}
          className={`${
            currentPage === index + 1
              ? "bg-sidebar text-white"
              : "bg-gray-200 text-muted-foreground hover:bg-sidebar-accent hover:text-white"
          } px-2 py-1 md:px-4 md:py-2 rounded-md  transition-colors duration-300 shadow-md text-center`}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}