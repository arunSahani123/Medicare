import { useEffect, useRef } from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { animateModal } from '../utils/animations';

export default function Modal({ open, onClose, title, message }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open && modalRef.current) {
      animateModal(modalRef.current);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div ref={modalRef} className="w-full max-w-md rounded-[28px] border border-cyan-100 bg-white p-7 shadow-[0_35px_90px_rgba(15,23,42,0.2)]">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-4xl text-emerald-600">
            <GoCheckCircleFill />
          </div>
        </div>
        <h3 className="mt-5 text-center text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-center text-sm leading-7 text-slate-600">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
