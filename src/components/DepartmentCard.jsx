export default function DepartmentCard({ department }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(14,116,144,0.12)]">
      <img src={department.image} alt={department.name} className="h-56 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-900">{department.name}</h3>
          <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
            {department.availableDoctors} docs
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-600">{department.description}</p>
        <button className="inline-flex rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700">
          View Department
        </button>
      </div>
    </article>
  );
}
