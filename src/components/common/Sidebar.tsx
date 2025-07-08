'use client';
import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/request";
import Link from "next/link";

import { Icon } from "@ui5/webcomponents-react";
import { usePathname } from "next/navigation";


const Sidebar = () => {
  const pathName = usePathname();
  const styleButtonDefault = 'inline-flex gap-1 items-center p-2 rounded-sm transition-all duration-200 shadow-lg hover:scale-105';

  return (
    <header className="bg-black text-white w-screen shadow-lg grid grid-cols-2 md:grid-cols-none p-5 md:h-screen md:w-[250px] md:grid-rows-2 gap-5 md:gap-0">
      {/* header */}
      <div className="text-balance text-center col-span-2">
        <p className="text-2xl font-bold">Welcome to the Leave Request</p>
        <span>By Estiven Mejia</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-5">
        <ul>
          <Link href={"/"} className={`${pathName === '/' && 'bg-blue-500 hover:bg-blue-700 text-white'} ${styleButtonDefault}`}>
          <Icon name="home" className="text-white"/>
          Home</Link>
        </ul>
        <ul>
          <Link href={"/leave_requests"} className={`${pathName === '/leave_requests' && 'bg-blue-500'} ${styleButtonDefault}`}>
          <Icon name="request" className="text-white"></Icon>
          Leave Requests</Link>
        </ul>
      </nav>
    </header>
  );
};

export { Sidebar };
