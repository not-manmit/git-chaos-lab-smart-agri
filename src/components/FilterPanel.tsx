"use client";

const categories = ["grain", "vegetable", "fruit", "dairy", "spice"];

type FilterPanelProps = {
  selected: string[];
  setSelected: (selected: string[]) => void;
};

export default function FilterPanel({ selected, setSelected }: FilterPanelProps) {
  function toggleCategory(category: string) {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
      return;
    }

    selected.push(category);
    setSelected(selected);
  }

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Filters</h2>
      <div className="mt-4 space-y-3">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => toggleCategory(category)}
              className="h-4 w-4 rounded border-slate-300 text-crop"
            />
            <span className="capitalize">{category}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
