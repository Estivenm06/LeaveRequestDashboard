'use client';
import React from 'react';
import { Button } from "@ui5/webcomponents-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleClick: (pageNumber: number, page: number) => void;
}

export default function Pagination({ totalPages, currentPage, handleClick }: PaginationProps){

  return (
    <div className="flex justify-center items-center mt-4 mb-4 gap-5">
      {new Array(totalPages).fill("").map((_, index) => (
    <Button
      key={index}
      onClick={() => handleClick(index + 1, currentPage)}
      className={`${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300`}
    >
      {index + 1}
    </Button>
  ))}
    </div>
  );
};
