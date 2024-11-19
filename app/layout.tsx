import type { Metadata } from "next";
import "./globals.css";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
