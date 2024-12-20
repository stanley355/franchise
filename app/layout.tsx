import type { Metadata } from "next";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
// import {Providers} from "@/components/custom-ui/Providers";

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
      {/*<Providers>*/}
        {children}
      {/*</Providers>*/}
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
