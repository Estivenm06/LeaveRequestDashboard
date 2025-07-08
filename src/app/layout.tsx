import { ThemeProvider } from "@ui5/webcomponents-react";

import "./globals.css";
import { inter } from "./ui/fonts";
import { Sidebar } from "@/components/common/Sidebar";

export const metadata = {
  title: "Leave Request Dashboard",
  description: "A dashboard for managing leave requests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} md:flex items-center`}>
          <Sidebar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
