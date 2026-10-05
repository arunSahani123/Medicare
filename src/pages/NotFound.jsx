import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-20 text-center">
      <div>
        <div className="text-7xl font-black text-cyan-600">404</div>
        <h1 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">The page you were looking for does not exist or has moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white">
          Back to home
        </Link>
      </div>
    </div>
  );
}
