import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Departments', to: '/departments' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const departments = ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology'];
const services = ['Emergency Care', 'Pharmacy', 'ICU', 'Radiology', 'Ambulance'];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-xl font-black text-white">
                M
              </div>
              <div>
                <div className="text-xl font-black text-white">MediCare</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Hospital</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Compassionate, advanced medical care designed around patient comfort, clinical excellence, and long-term wellness.
            </p>
            <div className="flex gap-3 text-sm text-slate-300">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, index) => (
                <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition hover:border-cyan-500 hover:text-cyan-300">
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Hospital</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link.label}><Link to={link.to} className="transition hover:text-cyan-300">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Departments</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {departments.map((department) => (
                <li key={department}>{department}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Your email" className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 sm:w-72" />
              <button className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-slate-400">
              <span>© 2026 MediCare Hospital</span>
              <Link to="/privacy" className="hover:text-cyan-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
