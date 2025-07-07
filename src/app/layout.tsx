import { ThemeProvider } from "@ui5/webcomponents-react";
import "./globals.css";
import { inter } from "./ui/fonts";

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
      <body className={`${inter}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
