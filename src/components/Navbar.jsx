import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaPhone, FaXmark } from 'react-icons/fa6';
import gsap from 'gsap';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/departments', label: 'Departments' },
  { to: '/services', label: 'Services' },
  { to: '/appointment', label: 'Appointment' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!navRef.current) return undefined;

    const navItems = navRef.current.querySelectorAll('.nav-item');
    const ctx = gsap.context(() => {
      if (navItems.length) {
        gsap.fromTo(navItems, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' });
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={navRef} className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
            M
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900">MediCare</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Hospital</div>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700">
            Login
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
            <FaPhone className="text-[12px]" /> Emergency Contact
          </Link>
        </div>

        <button type="button" aria-label="Toggle menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm lg:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `block rounded-2xl px-4 py-3 text-base font-medium ${isActive ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4">
              <Link to="/login" className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700">
                Login
              </Link>
              <Link to="/contact" className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 text-center text-sm font-semibold text-white">
                Emergency Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
