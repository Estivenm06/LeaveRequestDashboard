"use client";
import "@ui5/webcomponents-icons/dist/AllIcons";
import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/request";
import Link from "next/link";

import { Icon } from "@ui5/webcomponents-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const styleButtonDefault =
    "flex items-center p-2 rounded-sm transition-all duration-200 w-full justify-start text-sidebar-foreground text-sm";

  return (
      // Sidebar 
      <aside className="w-64 border-r bg-sidebar min-h-[calc(100vh-4rem)]">
      {/* Navigation */}
      <nav className="p-4 space-y-2">
          <Link
            href={"/"}
            className={`${styleButtonDefault} ${
              pathName === "/" ? "bg-foreground text-primary shadow-md" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
            
          >
            <Icon name="home" className="mr-2 h-4 w-4 text-white" />
            Home
          </Link>
          <Link
            href={"/leave_requests"}
            className={`${styleButtonDefault} ${
              pathName === "/leave_requests" ? "bg-foreground text-primary shadow-md" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon name="request" className="mr-2 h-4 w-4 text-white" />
            Leave Requests
          </Link>
      </nav>
      </aside>
  );
};

export { Sidebar };
