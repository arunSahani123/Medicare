import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FaBell, FaCalendarCheck, FaFileMedical, FaUserDoctor, FaMessage, FaRightFromBracket } from 'react-icons/fa6';

const bloodPressure = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 123 },
  { name: 'Mar', value: 118 },
  { name: 'Apr', value: 116 },
  { name: 'May', value: 110 },
  { name: 'Jun', value: 112 },
];

const heartRate = [
  { name: 'Jan', value: 72 },
  { name: 'Feb', value: 75 },
  { name: 'Mar', value: 71 },
  { name: 'Apr', value: 69 },
  { name: 'May', value: 68 },
  { name: 'Jun', value: 66 },
];

const weight = [
  { name: 'Jan', value: 76 },
  { name: 'Feb', value: 75 },
  { name: 'Mar', value: 73 },
  { name: 'Apr', value: 74 },
  { name: 'May', value: 72 },
  { name: 'Jun', value: 71 },
];

const appointments = [
  { date: '2026-10-08', doctor: 'Dr. Ananya Sharma', time: '9:30 AM', status: 'Confirmed' },
  { date: '2026-10-12', doctor: 'Dr. Priya Singh', time: '2:00 PM', status: 'Pending' },
  { date: '2026-10-15', doctor: 'Dr. Rahul Verma', time: '11:00 AM', status: 'Confirmed' },
];

const records = [
  { type: 'Blood Test', date: '2026-09-12', result: 'Normal' },
  { type: 'X-Ray', date: '2026-09-18', result: 'Review needed' },
  { type: 'ECG', date: '2026-09-22', result: 'Stable' },
];

const messages = [
  { doctor: 'Dr. Ananya Sharma', text: 'Your blood pressure is stable this week. Continue the prescribed routine.' },
  { doctor: 'Dr. Priya Singh', text: 'Please maintain hydration and keep your follow-up scheduled next week.' },
];

const sidebarItems = [
  { label: 'Dashboard', icon: FaCalendarCheck, active: true },
  { label: 'Appointments', icon: FaCalendarCheck },
  { label: 'Medical Records', icon: FaFileMedical },
  { label: 'Prescriptions', icon: FaBell },
  { label: 'Doctors', icon: FaUserDoctor },
  { label: 'Messages', icon: FaMessage },
  { label: 'Profile', icon: FaUserDoctor },
  { label: 'Logout', icon: FaRightFromBracket },
];

const stats = [
  { label: 'Upcoming Appointment', value: '2 booked' },
  { label: 'Medical Records', value: '12 files' },
  { label: 'Prescriptions', value: '4 active' },
  { label: 'Messages', value: '3 new' },
];

export default function PatientPortal() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[30px] border border-slate-200 bg-slate-900 p-5 text-white shadow-[0_25px_60px_rgba(15,23,42,0.18)]">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-xl font-black text-white">M</div>
            <div>
              <div className="text-xl font-black">MediCare</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Patient portal</div>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map(({ label, icon: Icon, active }) => (
              <button key={label} type="button" className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition ${active ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'}`}>
                <Icon />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Dashboard</p>
              <h1 className="mt-3 text-4xl font-black text-slate-900">Welcome back, Sarah.</h1>
            </div>
            <button className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">View report</button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">{stat.label}</div>
                <div className="mt-3 text-3xl font-black text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)] xl:col-span-2">
              <h3 className="text-xl font-bold text-slate-900">Blood Pressure</h3>
              <div className="mt-4 h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bloodPressure}>
                    <defs>
                      <linearGradient id="bp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#22c55e" fill="url(#bp)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-bold text-slate-900">Heart Rate</h3>
              <div className="mt-4 h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={heartRate}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
            <h3 className="text-xl font-bold text-slate-900">Weight</h3>
            <div className="mt-4 h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weight}>
                  <defs>
                    <linearGradient id="weight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="url(#weight)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-bold text-slate-900">Upcoming appointment</h3>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="p-3">Date</th>
                      <th className="p-3">Doctor</th>
                      <th className="p-3">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((item) => (
                      <tr key={item.date} className="border-t border-slate-200">
                        <td className="p-3">{item.date}</td>
                        <td className="p-3">{item.doctor}</td>
                        <td className="p-3">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-bold text-slate-900">Medical records</h3>
              <div className="mt-5 space-y-3">
                {records.map((record) => (
                  <div key={record.date} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div>
                      <div className="font-semibold text-slate-800">{record.type}</div>
                      <div className="text-xs text-slate-500">{record.date}</div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{record.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-bold text-slate-900">Prescription cards</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {['Vitamin D', 'Blood Pressure Support', 'Hydration Plan', 'Follow-up meds'].map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                    <div className="text-sm font-semibold text-cyan-700">{item}</div>
                    <div className="mt-2 text-xs text-slate-600">Daily use · 30-day supply</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-bold text-slate-900">Doctor messages</h3>
              <div className="mt-5 space-y-4">
                {messages.map((message) => (
                  <div key={message.doctor} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="font-semibold text-slate-900">{message.doctor}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
