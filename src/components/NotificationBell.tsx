"use client";

import { useState } from "react";
import { weatherAlerts } from "@/services/mockDb";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Weather alerts"
        onClick={() => setOpen((value) => !value)}
        className="relative rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900"
      >
        Alerts
        <span className="absolute -right-1 -top-1 rounded-full bg-rose-600 px-1.5 text-xs font-bold text-white">
          {weatherAlerts.length}
        </span>
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-2 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-2 text-sm font-semibold">Active weather alerts</p>
          <div className="space-y-2">
            {weatherAlerts.map((alert) => (
              <div key={alert.id} className="rounded-md bg-slate-50 p-3 text-sm dark:bg-slate-800">
                <p className="font-medium">{alert.title}</p>
                <p className="text-xs text-slate-500">{alert.region} · {alert.severity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
