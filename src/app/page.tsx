import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-crop">Hackathon dashboard</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Smart Agri-Marketplace
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Match farmers, buyers, inventory, weather risk, and AI yield predictions in one operational dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex rounded-md bg-crop px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
        >
          Open Dashboard
        </Link>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-md bg-green-50 p-4 text-green-900">AI yield forecast ready</div>
          <div className="rounded-md bg-blue-50 p-4 text-blue-900">Live buyer demand</div>
          <div className="rounded-md bg-amber-50 p-4 text-amber-900">Weather alerts active</div>
          <div className="rounded-md bg-rose-50 p-4 text-rose-900">Inventory upload pending</div>
        </div>
      </div>
    </section>
  );
}
