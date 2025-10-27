"use client";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md py-3 mb-8 rounded-xl border border-slate-700 text-center shadow-md lg:static lg:backdrop-blur-none lg:hidden">
      <h2 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
        {title}
      </h2>
    </div>
  );
}