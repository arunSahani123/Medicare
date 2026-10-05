import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  dob: '',
};

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordStrength = useMemo(() => {
    const password = form.password;
    if (!password) return { label: 'No password', score: 0 };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) return { label: 'Weak', score };
    if (score === 2 || score === 3) return { label: 'Medium', score };
    return { label: 'Strong', score };
  }, [form.password]);

  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email required';
    if (!form.phone || form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Valid phone number required';
    if (!form.password || form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters';
    if (form.confirmPassword !== form.password) nextErrors.confirmPassword = 'Passwords do not match';
    if (!form.dob) nextErrors.dob = 'Date of birth is required';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    alert('Registration submitted successfully');
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)] md:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Register</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Create your profile</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" placeholder="Jane Doe" />
            {errors.fullName && <p className="mt-2 text-xs text-rose-500">{errors.fullName}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" placeholder="jane@example.com" />
            {errors.email && <p className="mt-2 text-xs text-rose-500">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" placeholder="9876543210" />
            {errors.phone && <p className="mt-2 text-xs text-rose-500">{errors.phone}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Date of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-cyan-400" />
            {errors.dob && <p className="mt-2 text-xs text-rose-500">{errors.dob}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-slate-700 outline-none focus:border-cyan-400" />
              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
            </div>
            {errors.password && <p className="mt-2 text-xs text-rose-500">{errors.password}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
            <div className="relative">
              <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-slate-700 outline-none focus:border-cyan-400" />
              <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</button>
            </div>
            {errors.confirmPassword && <p className="mt-2 text-xs text-rose-500">{errors.confirmPassword}</p>}
          </div>

          <div className="md:col-span-2">
            <div className="mb-2 text-sm font-medium text-slate-700">Password strength</div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className={`h-full rounded-full ${passwordStrength.label === 'Weak' ? 'w-1/3 bg-rose-500' : passwordStrength.label === 'Medium' ? 'w-2/3 bg-amber-500' : 'w-full bg-emerald-500'}`} />
            </div>
            <div className="mt-2 text-xs text-slate-500">{passwordStrength.label}</div>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white">Register now</button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="font-semibold text-cyan-700">Login</Link>
        </div>
      </div>
    </div>
  );
}
