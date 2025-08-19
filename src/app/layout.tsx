import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

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
        <div className="min-h-screen bg-slate-50">
          {/* Fixed Navbar - spans full width */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          {/* Main Layout with Sidebar */}
          <div className="flex pt-16">
            {" "}
            {/* pt-16 to account for navbar height */}
            {/* Fixed Sidebar */}
            <div className="fixed top-16 left-0 bottom-0 z-40">
              <Sidebar />
            </div>
            {/* Main Content */}
            <main className="flex-1 ml-64 overflow-auto">
              {" "}
              {/* ml-64 to account for sidebar width */}
              <div className="p-6">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
