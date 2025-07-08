import '@ui5/webcomponents-react/dist/Assets';
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
        <h1 className='text-2xl text-center mx-auto p-5 bg-gray-500 text-white font-bold'>Leave Request Dashboard</h1>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
