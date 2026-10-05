import { Link } from 'react-router-dom';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';

export default function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(14,116,144,0.12)]">
      <div className="relative overflow-hidden rounded-[22px]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm">
          {doctor.rating.toFixed(1)} <FaStar className="ml-1 inline text-amber-400" />
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
          <p className="mt-1 text-sm font-medium text-cyan-700">{doctor.specialization}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{doctor.experience} Years Experience</span>
          <span className="rounded-full bg-cyan-50 px-2.5 py-1 font-medium text-cyan-700">{doctor.availableDays[0]}</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          <FaCalendarAlt className="text-cyan-600" />
          <span>{doctor.availableDays.join(', ')}</span>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            to={`/doctors/${doctor.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            View Profile
          </Link>
          <Link
            to="/appointment"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
