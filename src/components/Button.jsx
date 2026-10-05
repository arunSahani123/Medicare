import { Link } from 'react-router-dom';

const styles = {
  primary: 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-500/20 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-cyan-500/30',
  secondary: 'bg-white text-slate-800 border border-slate-200 hover:border-cyan-500 hover:text-cyan-700',
  ghost: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100',
};

export default function Button({ children, variant = 'primary', to, onClick, type = 'button', className = '', fullWidth = false }) {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out',
    styles[variant] || styles.primary,
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
