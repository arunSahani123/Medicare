import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarCheck, FaClock, FaLanguage, FaStar, FaAward, FaStethoscope } from 'react-icons/fa6';
import { doctors } from '../data/doctors';

const tabs = ['About', 'Experience', 'Education', 'Reviews'];

export default function DoctorDetails() {
  const { doctorId } = useParams();
  const doctor = useMemo(() => doctors.find((item) => item.id === Number(doctorId)) || doctors[0], [doctorId]);
  const [activeTab, setActiveTab] = useState('About');

  const renderTab = () => {
    if (activeTab === 'Experience') {
      return (
        <div className="space-y-4">
          {doctor.experienceDetails.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{item}</div>
          ))}
        </div>
      );
    }

    if (activeTab === 'Education') {
      return (
        <div className="space-y-4">
          {doctor.education.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{item}</div>
          ))}
        </div>
      );
    }

    if (activeTab === 'Reviews') {
      return (
        <div className="space-y-5">
          {doctor.reviews.map((review) => (
            <div key={review.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-800">{review.name}</span>
                <span className="flex items-center gap-1 text-amber-500"><FaStar /> {review.rating}.0</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{review.text}</p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-6 text-slate-600">
        <p className="text-base leading-8">{doctor.bio}</p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h4 className="text-lg font-bold text-slate-900">Specializations</h4>
          <p className="mt-3 text-sm leading-7">Clinical leadership in preventive healthcare, advanced diagnostics, and patient-centered treatment planning.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
          <img src={doctor.image} alt={doctor.name} className="h-[540px] w-full rounded-[26px] object-cover" />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">{doctor.specialization}</p>
              <h1 className="mt-3 text-4xl font-black text-slate-900">{doctor.name}</h1>
            </div>
            <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600"><FaStar className="mr-1 inline" /> {doctor.rating.toFixed(1)}</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Experience</div><div className="mt-2 text-xl font-bold text-slate-900">{doctor.experience} yrs</div></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Fee</div><div className="mt-2 text-xl font-bold text-slate-900">₹{doctor.fee}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Languages</div><div className="mt-2 text-lg font-bold text-slate-900">{doctor.languages.length}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-500">Availability</div><div className="mt-2 text-lg font-bold text-slate-900">{doctor.availableDays[0]}</div></div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
            <div className="mb-4 flex gap-3">
              {tabs.map((tab) => (
                <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === tab ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {tab}
                </button>
              ))}
            </div>
            {renderTab()}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white">
              <FaCalendarCheck /> Book Appointment
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">
              <FaClock /> Slots: Mon, Wed, Fri
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><FaLanguage className="mb-2 text-cyan-700" /><div className="font-semibold text-slate-900">Languages</div><div className="mt-2 text-sm text-slate-600">{doctor.languages.join(', ')}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><FaAward className="mb-2 text-cyan-700" /><div className="font-semibold text-slate-900">Awards</div><div className="mt-2 text-sm text-slate-600">{doctor.awards.join(', ')}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><FaStethoscope className="mb-2 text-cyan-700" /><div className="font-semibold text-slate-900">Specialty</div><div className="mt-2 text-sm text-slate-600">{doctor.specialization}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
