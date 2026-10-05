import { useMemo, useState } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data/departments';

export default function Departments() {
  const [search, setSearch] = useState('');

  const filteredDepartments = useMemo(() => {
    return departments.filter((department) =>
      department.name.toLowerCase().includes(search.toLowerCase()) ||
      department.description.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Departments</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Comprehensive care across specialties.</h1>
        </div>
        <div className="w-full max-w-md">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search department"
            className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredDepartments.length ? (
          filteredDepartments.map((department) => <DepartmentCard key={department.id} department={department} />)
        ) : (
          <div className="col-span-full rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            No matching departments found.
          </div>
        )}
      </div>
    </div>
  );
}
