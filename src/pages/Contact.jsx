import { useState } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope, FaHospital, FaClock } from 'react-icons/fa6';

const contactItems = [
  { icon: FaLocationDot, label: 'Address', value: '245 Wellness Avenue, Green Park, New Delhi, India' },
  { icon: FaPhone, label: 'Phone', value: '+91 98765 43210' },
  { icon: FaEnvelope, label: 'Email', value: 'care@medicarehospital.com' },
  { icon: FaHospital, label: 'Emergency', value: '+1 (800) 555-0148' },
  { icon: FaClock, label: 'Opening Hours', value: 'Mon - Sat: 8:00 AM - 9:00 PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Contact us</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Let's care for your health together.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Icon />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</div>
                <div className="mt-2 text-base text-slate-800">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-slate-900">Send us a message</h2>
            {submitted && <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Message sent</span>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Your name" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" />
              <input type="email" placeholder="Email address" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" />
            </div>
            <input type="text" placeholder="Phone number" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" />
            <textarea rows={5} placeholder="Your message" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" />
            <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white">
              Send message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <div className="flex h-[320px] items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50 text-xl font-semibold text-slate-400">
          Google Maps Placeholder
        </div>
      </div>
    </div>
  );
}
