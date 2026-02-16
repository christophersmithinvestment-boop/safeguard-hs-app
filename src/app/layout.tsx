import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health & Safety Portal",
  description: "Comprehensive health and safety management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased flex")}>
        <Sidebar className="hidden md:flex" />
        <main className="flex-1 overflow-y-auto h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
