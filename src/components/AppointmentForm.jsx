import { useMemo, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Modal from './Modal';

const initState = {
  patientName: '',
  email: '',
  phone: '',
  date: '',
  department: 'Cardiology',
  doctor: 'Dr. Ananya Sharma',
  appointmentType: 'In-person',
  preferredTime: 'Morning',
  message: '',
};

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'General Medicine'];
const doctors = ['Dr. Ananya Sharma', 'Dr. Rahul Verma', 'Dr. Priya Singh', 'Dr. Amit Kumar', 'Dr. Sneha Nair'];

export default function AppointmentForm() {
  const [form, setForm] = useState(initState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const errorCount = useMemo(() => Object.keys(errors).length, [errors]);

  const validate = () => {
    const nextErrors = {};

    if (!form.patientName.trim()) nextErrors.patientName = 'Patient name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required.';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Valid phone number is required.';
    if (!form.date) nextErrors.date = 'Choose a preferred date.';
    if (!form.message.trim()) nextErrors.message = 'Please add your concern or message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    setIsOpen(true);
    setForm(initState);
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Patient Name</label>
            <input name="patientName" value={form.patientName} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white" placeholder="John Smith" />
            {errors.patientName && <p className="mt-2 text-xs text-rose-500">{errors.patientName}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white" placeholder="john@example.com" />
            {errors.email && <p className="mt-2 text-xs text-rose-500">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white" placeholder="+1 (555) 123-4567" />
            {errors.phone && <p className="mt-2 text-xs text-rose-500">{errors.phone}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white" />
            {errors.date && <p className="mt-2 text-xs text-rose-500">{errors.date}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Department</label>
            <select name="department" value={form.department} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white">
              {departments.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Doctor</label>
            <select name="doctor" value={form.doctor} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white">
              {doctors.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Appointment Type</label>
            <select name="appointmentType" value={form.appointmentType} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white">
              <option value="In-person">In-person</option>
              <option value="Video Consultation">Video Consultation</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Preferred Time</label>
            <select name="preferredTime" value={form.preferredTime} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white">
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
          <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white" placeholder="Tell us about your symptoms or concerns..." />
          {errors.message && <p className="mt-2 text-xs text-rose-500">{errors.message}</p>}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {submitted ? <FiCheckCircle className="text-emerald-600" /> : null}
            {submitted ? 'Appointment booked successfully!' : `${errorCount} validation issue${errorCount === 1 ? '' : 's'}`}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
        </div>
      </form>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Appointment booked successfully!" message="Our care team will confirm your appointment details via email or phone shortly." />
    </>
  );
}
