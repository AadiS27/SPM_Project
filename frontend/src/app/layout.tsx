import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import { SidebarProvider } from "@/components/SidebarProvider";
import SidebarToggle from "@/components/SidebarToggle";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AOI - A Minimal Programming Language Interpreter",
  description: "Learn how interpreters work with AOI, a simple programming language built with Rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <Sidebar />
            <main className="flex-1 w-full relative">
              <SidebarToggle />
              <Breadcrumb />
              <div className="w-full">
                {children}
              </div>
            </main>
          </div>
          <ChatBot />
        </SidebarProvider>
      </body>
    </html>
  );
}
