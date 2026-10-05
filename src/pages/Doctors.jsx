import { useEffect, useMemo, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

const specializations = [...new Set(doctors.map((doctor) => doctor.specialization))];

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [specialization, setSpecialization] = useState('All');
  const [minExperience, setMinExperience] = useState(0);
  const [sortOrder, setSortOrder] = useState('rating-desc');

  const filteredDoctors = useMemo(() => {
    const result = doctors.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase()) || doctor.specialization.toLowerCase().includes(search.toLowerCase());
      const matchesSpec = specialization === 'All' || doctor.specialization === specialization;
      const matchesExp = doctor.experience >= minExperience;
      return matchesSearch && matchesSpec && matchesExp;
    });

    result.sort((a, b) => {
      if (sortOrder === 'rating-desc') return b.rating - a.rating;
      if (sortOrder === 'rating-asc') return a.rating - b.rating;
      if (sortOrder === 'experience-desc') return b.experience - a.experience;
      return a.experience - b.experience;
    });

    return result;
  }, [search, specialization, minExperience, sortOrder]);

  useEffect(() => {
    const cards = document.querySelectorAll('.doctor-card');
    cards.forEach((card, index) => {
      card.animate(
        [
          { opacity: 0, transform: 'translateY(45px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 700,
          delay: index * 80,
          easing: 'ease-out',
          fill: 'forwards',
        },
      );
    });
  }, [filteredDoctors]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Our doctors</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Find the right specialist for your care.</h1>
      </div>

      <div className="mb-10 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)] md:grid-cols-4">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search doctor"
          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-400"
        />

        <select value={specialization} onChange={(event) => setSpecialization(event.target.value)} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-400">
          <option value="All">All specializations</option>
          {specializations.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select value={minExperience} onChange={(event) => setMinExperience(Number(event.target.value))} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-400">
          <option value={0}>All experience</option>
          <option value={10}>10+ years</option>
          <option value={12}>12+ years</option>
          <option value={15}>15+ years</option>
        </select>

        <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-400">
          <option value="rating-desc">Sort by rating</option>
          <option value="rating-asc">Lowest rating</option>
          <option value="experience-desc">Experience high to low</option>
          <option value="experience-asc">Experience low to high</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredDoctors.length ? (
          filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        ) : (
          <div className="col-span-full rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            No doctors match the chosen filters.
          </div>
        )}
      </div>
    </div>
  );
}
