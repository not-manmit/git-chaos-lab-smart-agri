"use client";

import CsvUploader from "@/components/CsvUploader";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Inventory Control</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Upload crop batches, reconcile stock, and prepare buyer catalogs.
        </p>
      </div>
      <CsvUploader />
    </div>
  );
}
