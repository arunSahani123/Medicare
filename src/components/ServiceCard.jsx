import * as Icons from 'react-icons/fa6';

const mapping = {
  FaHeartbeat: Icons.FaHeartPulse,
  FaBrain: Icons.FaBrain,
  FaBone: Icons.FaBone,
  FaBaby: Icons.FaBaby,
  FaTooth: Icons.FaTooth,
  FaSpa: Icons.FaSpa,
  FaXRay: Icons.FaXRay,
  FaFlask: Icons.FaFlask,
  FaCapsules: Icons.FaCapsules,
  FaHeartPulse: Icons.FaHeartPulse,
  FaTruckMedical: Icons.FaTruckMedical,
};

export default function ServiceCard({ service }) {
  const Icon = mapping[service.icon] || Icons.FaStethoscope;

  return (
    <article className="service-card group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(14,116,144,0.12)]">
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="text-2xl" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>

      <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100">
        Learn More
        <span aria-hidden>→</span>
      </button>
    </article>
  );
}
