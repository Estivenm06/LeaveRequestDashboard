'use client';
import React from 'react';

export default function PaginationSkeleton(){
  return (
    <div className="flex flex-row justify-center items-center mt-4 mb-4 gap-2 md:gap-5">
      {new Array(4).fill("").map((_, index) => (
    <div
      key={index}
      className={`px-8 py-3 rounded-md shadow-md animate-pulse bg-gray-500`}
    >
    </div>
  ))}
    </div>
  );
};