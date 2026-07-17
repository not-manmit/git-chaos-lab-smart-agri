"use client";

import { useState } from "react";

type ParsedRow = {
  name: string;
  category: string;
  pricePerKg: string;
  stockKg: string;
};

export default function CsvUploader() {
  const [rows, setRows] = useState<ParsedRow[]>([]);

  function parseCsv(text: string) {
    const [, ...records] = text.trim().split("\n");
    const parsed = records.map((line) => {
      const [name, category, pricePerKg, stockKg] = line.split(",");
      return { name, category, pricePerKg, stockKg };
    });

    setRows(parsed);
  }

  async function handleFile(file: File) {
    const text = await file.text();
    parseCsv(text);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold">Bulk Product CSV Uploader</h2>
      <p className="mt-2 text-sm text-slate-500">
        Parser skeleton expects columns: name, category, pricePerKg, stockKg.
      </p>
      <input
        type="file"
        accept=".csv"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            void handleFile(file);
          }
        }}
        className="mt-4 block w-full rounded-md border border-dashed border-slate-300 p-4 text-sm dark:border-slate-700"
      />
      <div className="mt-4 overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
        {rows.map((row, index) => (
          <div key={`${row.name}-${index}`} className="grid grid-cols-4 gap-2 border-b border-slate-100 p-3 text-sm last:border-0 dark:border-slate-800">
            <span>{row.name}</span>
            <span>{row.category}</span>
            <span>{row.pricePerKg}</span>
            <span>{row.stockKg}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
