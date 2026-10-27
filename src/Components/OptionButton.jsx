// components/OptionButton.jsx
export default function OptionButton({ label, text, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left
        transition-all duration-200 active:scale-[0.99]
        ${
          selected
            ? 'border-indigo-500 bg-indigo-50 shadow-md shadow-indigo-500/10'
            : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/40 hover:shadow-sm'
        }`}
    >
      {/* Letter badge */}
      <span
        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center
          font-bold text-sm transition-colors
          ${
            selected
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
          }`}
      >
        {label}
      </span>

      {/* Option text */}
      <span
        className={`flex-1 text-sm sm:text-base font-medium transition-colors
          ${selected ? 'text-indigo-900' : 'text-slate-700'}`}
      >
        {text}
      </span>

      {/* Check indicator */}
      <span
        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-200
          ${
            selected
              ? 'bg-indigo-600 scale-100 opacity-100'
              : 'bg-slate-200 scale-90 opacity-0 group-hover:opacity-40'
          }`}
      >
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </button>
  );
}