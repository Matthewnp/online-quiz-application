// components/ProgressBar.jsx
export default function ProgressBar({ current, total }) {
  const percent = ((current - 1) / total) * 100;
  const answeredPercent = (current / total) * 100;

  return (
    <div className="w-full">
      {/* Label row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-600">
          Question{' '}
          <span className="font-bold text-indigo-600">{current}</span>
          <span className="text-slate-400"> of </span>
          <span className="font-semibold text-slate-700">{total}</span>
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {Math.round(answeredPercent)}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500
            transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}