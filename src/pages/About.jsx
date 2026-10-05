import { useEffect, useRef } from 'react';
import { FaArrowRight, FaCircleCheck, FaHospital, FaShieldHeart, FaUsers } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const timeline = [
  { year: '2010', title: 'Hospital Founded', text: 'MediCare opened its first patient-focused healthcare center in the heart of the city.' },
  { year: '2014', title: 'New Emergency Department', text: 'A dedicated emergency wing was launched to support critical care around the clock.' },
  { year: '2018', title: 'Advanced Cardiology Center', text: 'Our specialized cardiology unit introduced state-of-the-art diagnostics and procedures.' },
  { year: '2022', title: 'Digital Patient Portal', text: 'A secure digital portal was launched to simplify care coordination and appointment management.' },
  { year: '2025', title: 'AI-assisted Diagnostics', text: 'We expanded with AI-supported analysis to improve early detection and treatment planning.' },
];

const values = [
  { icon: FaShieldHeart, title: 'Compassion', text: 'We listen closely and care for patients with empathy, dignity, and respect.' },
  { icon: FaHospital, title: 'Clinical Excellence', text: 'Our care teams use evidence-based methods and advanced medical standards.' },
  { icon: FaUsers, title: 'Patient-first Approach', text: 'Every pathway is designed around comfort, transparency, and long-term wellbeing.' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const storyBlocks = sectionRef.current.querySelectorAll('.story-block');
    const timelineItems = sectionRef.current.querySelectorAll('.timeline-item');
    const timeline = sectionRef.current.querySelector('.timeline');

    const ctx = gsap.context(() => {
      if (storyBlocks.length) {
        gsap.fromTo(storyBlocks, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
      }
      if (timelineItems.length && timeline) {
        gsap.fromTo(timelineItems, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: timeline, start: 'top 80%' } });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid items-center gap-12 py-8 lg:grid-cols-2">
        <div className="story-block">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">About our hospital</p>
          <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-6xl">Delivering thoughtful, modern care.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Since our founding, MediCare Hospital has focused on creating a healthier future through exceptional clinical care, transparent communication, and a patient-first culture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white">
              Book appointment <FaArrowRight />
            </Link>
            <Link to="/doctors" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">Meet specialists</Link>
          </div>
        </div>

        <div className="story-block overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
          <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895977?auto=format&fit=crop&w=1200&q=80" alt="Hospital team" className="h-[520px] w-full rounded-[26px] object-cover" />
        </div>
      </section>

      <section ref={sectionRef} className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="story-block rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(15,23,42,0.05)]">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
              <Icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[32px] bg-slate-900 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { value: '15+', label: 'Years of Experience' },
            { value: '90%', label: 'Patient Satisfaction' },
            { value: '24/7', label: 'Emergency Care' },
            { value: '25+', label: 'Clinical Departments' },
          ].map((stat) => (
            <div key={stat.label} className="story-block rounded-[24px] border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-4xl font-black text-cyan-300">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Our journey</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">Milestones that shaped our hospital.</h2>
        </div>

        <div className="timeline space-y-6">
          {timeline.map((item, index) => (
            <div key={item.year} className="timeline-item relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
              <div className="absolute left-6 top-6 h-full w-px bg-gradient-to-b from-cyan-500 to-transparent" />
              <div className="flex items-start gap-5">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
                  {item.year.slice(-2)}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">{item.year}</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
