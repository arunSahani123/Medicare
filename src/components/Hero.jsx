import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaPhone, FaShieldHeart } from 'react-icons/fa6';
import gsap from 'gsap';

const stats = [
  { value: '10K+', label: 'Happy Patients' },
  { value: '150+', label: 'Expert Doctors' },
  { value: '25+', label: 'Departments' },
  { value: '15+', label: 'Years of Excellence' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return undefined;

    const heroTexts = heroRef.current.querySelectorAll('.hero-text');
    const heroImage = heroRef.current.querySelector('.hero-image');
    const floatingCards = heroRef.current.querySelectorAll('.floating-card');
    const statCards = heroRef.current.querySelectorAll('.stat-card');

    const ctx = gsap.context(() => {
      if (heroTexts.length) {
        gsap.fromTo(heroTexts, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 });
      }
      if (heroImage) {
        gsap.fromTo(heroImage, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 });
      }
      if (floatingCards.length) {
        gsap.fromTo(floatingCards, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15, delay: 0.5 });
      }
      if (statCards.length) {
        gsap.fromTo(statCards, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.8 });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_35%),linear-gradient(180deg,#f0f9ff_0%,#ffffff_35%)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="hero-text inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm backdrop-blur">
              <FaShieldHeart className="text-base" />
              Trusted care, every step of the way
            </div>

            <div className="space-y-5">
              <h1 className="hero-text text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-7xl">
                Your Health, <span className="text-cyan-600">Our Priority</span>
              </h1>
              <p className="hero-text max-w-xl text-lg leading-8 text-slate-600">
                Advanced healthcare delivered by experienced doctors, modern technology, and compassionate care.
              </p>
            </div>

            <div className="hero-text flex flex-col gap-4 sm:flex-row">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5">
                Book an Appointment
              </Link>
              <Link to="/doctors" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700">
                Find a Doctor
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card rounded-[22px] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-image relative mx-auto max-w-xl overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_35px_80px_rgba(14,116,144,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895977?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor consulting patient"
                className="h-[560px] w-full rounded-[26px] object-cover"
              />
            </div>

            <div className="floating-card absolute -left-5 top-10 rounded-[22px] border border-slate-200 bg-white/90 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <FaCalendarCheck />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Consultation</div>
                  <div className="text-lg font-bold text-slate-900">Today, 4:30 PM</div>
                </div>
              </div>
            </div>

            <div className="floating-card absolute -right-1 bottom-10 rounded-[22px] border border-slate-200 bg-white/90 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Emergency</div>
                  <div className="text-lg font-bold text-slate-900">+1 (800) 555-0148</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
