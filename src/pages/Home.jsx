import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaStethoscope, FaShieldHeart, FaUsers } from 'react-icons/fa6';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import { services } from '../data/services';
import { doctors } from '../data/doctors';
import gsap from 'gsap';

const features = [
  { icon: FaShieldHeart, title: 'Patient-first care', text: 'We combine clinical excellence with compassionate, individualized support at every visit.' },
  { icon: FaStethoscope, title: 'Expert clinicians', text: 'Board-certified specialists across major departments and advanced healthcare disciplines.' },
  { icon: FaUsers, title: 'Modern facilities', text: 'Technology-enabled treatment spaces designed for faster, safer, and more comfortable care.' },
];

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const revealCards = sectionRef.current.querySelectorAll('.reveal-card');
    if (!revealCards.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(revealCards, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Why choose us</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Healthcare designed around you.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal-card rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-4 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={sectionRef} className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Our services</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">Specialized care for every stage of life.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
              View all services <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Meet our doctors</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">Exceptional care from trusted specialists.</h2>
          </div>
          <Link to="/doctors" className="hidden rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-cyan-300 hover:text-cyan-700 md:inline-flex">
            Explore doctors
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {doctors.slice(0, 4).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0f172a_0%,#0b5ea8_100%)] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Your health matters</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">A modern hospital experience built on trust and expertise.</h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/appointment" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900">Schedule visit</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">Talk to support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
