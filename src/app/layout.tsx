import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baseer TMS - Terminal Management System",
  description:
    "Advanced airport terminal management and resource optimization platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 flex">
          <Sidebar />
          <main className="flex-1 overflow-hidden">
            <div className="h-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
