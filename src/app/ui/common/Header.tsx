"use client";
import Link from "next/link";

const Header = () => {
  const sidebarHandler = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      if (sidebar.classList.contains("opacity-0")) {
        sidebar.classList.remove("-translate-x-full", "opacity-0");
        sidebar.classList.add("translate-x-0", "opacity-100");
    } else {
        sidebar.classList.remove("translate-x-0", "opacity-100");
        sidebar.classList.add("-translate-x-full", "opacity-0");
      }
    }
  };
  return (
    // Header
    <header className="sticky top-0 z-50 w-full border-b-primary bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center px-6">
        <div className="flex items-center space-x-2">
          <button
            className="space-y-1 group transition-all duration-200 cursor-pointer block lg:hidden"
            onClick={sidebarHandler}
          >
            <div className="w-4 h-0.5 bg-gray-500 rounded-full transition-all duration-200"></div>
            <div className="w-4 h-0.5 bg-gray-500 rounded-full transition-all duration-200"></div>
            <div className="w-4 h-0.5 bg-gray-500 rounded-full transition-all duration-200"></div>
          </button>
          <Link
            href="/"
            className="text-xl font-bold text-foreground select-none"
          >
            Leave Management
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
