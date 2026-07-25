"use client";

import Link from "next/link";
import NotificationBell from "@/components/NotificationBell";
import ThemeToggle from "@/components/ThemeToggle";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-crop">
          Smart Agri-Marketplace
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900">
            Dashboard
          </Link>
          <Link href="/inventory" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900">
            Inventory
          </Link>
          <NotificationBell />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
