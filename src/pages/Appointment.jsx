import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Appointment</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-6xl">Book your care visit.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
          <h2 className="text-3xl font-black">Why choose MediCare?</h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            <li>• Same-day appointments available for select specialties.</li>
            <li>• Expert specialists with 15+ years of trusted experience.</li>
            <li>• Digital confirmation and follow-up reminders.</li>
            <li>• Secure, personalized patient coordination.</li>
          </ul>
          <div className="mt-10 rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Call support</div>
            <div className="mt-2 text-2xl font-black">+1 (800) 555-0148</div>
          </div>
        </div>

        <AppointmentForm />
      </div>
    </div>
  );
}
