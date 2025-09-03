"use client";
import "@ui5/webcomponents-icons/dist/AllIcons";
import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/request";
import Link from "next/link";

import { Icon } from "@ui5/webcomponents-react";
import { usePathname } from "next/navigation";
import { useStore } from "../store/StoreContext";
import IconSkeleton from "../dashboard/Skeletons/IconSkeleton";

export default function Sidebar() {
  const { loading } = useStore();
  const pathName = usePathname();
  const styleButtonDefault =
    "flex items-center p-2 rounded-sm transition-all duration-200 w-full justify-start text-sidebar-foreground text-sm";

  return (
    // Sidebar
    <aside className="fixed top-16 bottom-0 left-0 w-50 md:w-64 border-r bg-sidebar md:bg-sidebar md:static transfrom transition-all duration-200 opacity-0 -translate-x-full md:opacity-100 md:translate-x-0 sidebar min-h-[calc(100vh-4rem)] z-100">
      {/* Navigation */}
      <nav className="p-4 space-y-2">
        <Link
          href={"/"}
          className={`${styleButtonDefault} ${
            pathName === "/"
              ? "bg-foreground text-primary shadow-md"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          {loading ? (
            <IconSkeleton className="mr-2" />
          ) : (
            <Icon name="home" className="mr-2 h-4 w-4 text-white" />
          )}
          Home
        </Link>
        <Link
          href={"/leave_requests"}
          className={`${styleButtonDefault} ${
            pathName === "/leave_requests"
              ? "bg-foreground text-primary shadow-md"
              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
        >
          {loading ? (
            <IconSkeleton className="mr-2" />
          ) : (
            <Icon name="request" className="mr-2 h-4 w-4 text-white" />
          )}
          Leave Requests
        </Link>
      </nav>
    </aside>
  );
}
