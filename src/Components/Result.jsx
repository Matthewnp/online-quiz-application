// pages/Result.jsx
import { useNavigate } from 'react-router';

export default function Result() {
  const navigate = useNavigate();
  const result = JSON.parse(sessionStorage.getItem('quizResult') || 'null');

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">No result found</h2>
          <p className="text-slate-500 mb-6">Take a quiz first to see your results here.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { score, correct, total, review } = result;

  // Theme based on score
  const theme =
    score >= 80
      ? {
          message: '🎉 Excellent work!',
          ring: 'text-emerald-500',
          track: 'stroke-emerald-100',
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          gradient: 'from-emerald-50 via-white to-teal-50',
          accent: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25',
        }
      : score >= 50
      ? {
          message: '👍 Good effort!',
          ring: 'text-amber-500',
          track: 'stroke-amber-100',
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          gradient: 'from-amber-50 via-white to-orange-50',
          accent: 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/25',
        }
      : {
          message: '📚 Keep practicing!',
          ring: 'text-rose-500',
          track: 'stroke-rose-100',
          badge: 'bg-rose-50 text-rose-700 border-rose-200',
          gradient: 'from-rose-50 via-white to-pink-50',
          accent: 'bg-rose-600 hover:bg-rose-700 shadow-rose-500/25',
        };

  // SVG circle math for score ring
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient} py-10 px-4`}>
      <div className="max-w-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="p-8 sm:p-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Quiz Complete!
            </h1>
            <p className="text-slate-500 mt-2">Here's how you did</p>

            {/* Score circle */}
            <div className="relative w-40 h-40 mx-auto mt-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="10"
                  className={theme.track}
                />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className={`${theme.ring} transition-all duration-1000 ease-out`}
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-800">{score}%</span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Score
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-6 text-slate-600">
              You got{' '}
              <span className="font-bold text-slate-800">{correct}</span> out of{' '}
              <span className="font-bold text-slate-800">{total}</span> correct.
            </p>

            <div
              className={`inline-flex items-center mt-4 px-4 py-2 rounded-full border text-sm font-semibold ${theme.badge}`}
            >
              {theme.message}
            </div>
          </div>

          {/* Review List */}
          <div className="px-6 sm:px-8 pb-8">
            <h2 className="text-sm uppercase tracking-wider font-semibold text-slate-400 mb-4">
              Review
            </h2>
            <div className="space-y-3">
              {review.map((r, i) => (
                <div
                  key={r.questionId}
                  className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                    r.isCorrect
                      ? 'bg-emerald-50/60 border-emerald-100'
                      : 'bg-rose-50/60 border-rose-100'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      r.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  >
                    {r.isCorrect ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Q{i + 1}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          r.isCorrect ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {r.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-slate-700 mt-1 text-sm sm:text-base">
                      Your answer:{' '}
                      <span className="font-semibold text-slate-900">
                        {r.userAnswer || '—'}
                      </span>
                      {!r.isCorrect && (
                        <>
                          {' · '}
                          Correct answer:{' '}
                          <span className="font-semibold text-emerald-700">
                            {r.correctOption}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-8 py-5 bg-slate-50 border-t border-slate-100 flex justify-center">
            <button
              onClick={() => navigate('/')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all active:scale-95 ${theme.accent}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Create Another Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}