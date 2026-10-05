import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';

const initialState = { email: '', password: '' };

export default function Login() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email required';
    if (!form.password || form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters';
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.06)] lg:grid-cols-2">
        <div className="hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_30%),linear-gradient(135deg,#0f172a,#0b5ea8)] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">M</div>
              <div className="text-2xl font-black">MediCare</div>
            </div>
            <h1 className="mt-12 text-4xl font-black">Welcome back.</h1>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">Access your appointments, care records, and digital health updates in one secure portal.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
            Trusted care with compassionate support from our clinical team.
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Login</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Sign into your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-400" placeholder="you@example.com" />
              {errors.email && <p className="mt-2 text-xs text-rose-500">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-slate-700 outline-none transition focus:border-cyan-400" placeholder="Enter your password" />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-xs text-rose-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600"><input type="checkbox" className="rounded border-slate-300" /> Remember me</label>
              <Link to="/forgot-password" className="text-cyan-700">Forgot password?</Link>
            </div>

            <button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 disabled:opacity-70">
              {loading ? 'Signing in...' : 'Login'}
            </button>

            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
              <FaGoogle /> Continue with Google
            </button>

            {success && <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Login successful. Redirecting to your dashboard...</div>}
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Don’t have an account? <Link to="/register" className="font-semibold text-cyan-700">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
