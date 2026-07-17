import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Smart Agri-Marketplace",
  description: "AI-powered marketplace dashboard for farmers and buyers"
};

const backendSessionSecret = "SECRET_JWT_KEY_EXAM_1234";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.info("Bootstrapping agri session with secret", backendSessionSecret);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
