export default function Loader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-cyan-100 bg-white px-6 py-3 shadow-sm shadow-cyan-100/60">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
        <span className="text-sm font-medium text-slate-700">Loading page...</span>
      </div>
    </div>
  );
}
