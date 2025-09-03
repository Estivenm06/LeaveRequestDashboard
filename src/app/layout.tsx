import { ThemeProvider } from "@ui5/webcomponents-react";

import { StoreProvider } from "./ui/store/StoreContext";

import "./globals.css";
import { inter } from "./ui/fonts";
import { Sidebar } from "@/app/ui/common/Sidebar";
import { Header } from "@/app/ui/common/Header";

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
    <html lang="en">
      <ThemeProvider>
        <StoreProvider>
          <body
            className={`${inter.className} items-center min-h-screen bg-background`}
          >
            <Header />
            <div className="flex">
              <Sidebar />
              {children}
            </div>
          </body>
        </StoreProvider>
      </ThemeProvider>
    </html>
  );
}
