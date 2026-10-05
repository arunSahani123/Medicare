import { useEffect, useMemo, useState } from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const [query, setQuery] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter((service) => service.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.7s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 60);
    });
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Our services</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Specialized medical care.</h1>
        </div>
        <div className="w-full max-w-md">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search service"
            className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredServices.length ? (
          filteredServices.map((service) => <ServiceCard key={service.id} service={service} />)
        ) : (
          <div className="col-span-full rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            No services found for your search.
          </div>
        )}
      </div>
    </div>
  );
}
