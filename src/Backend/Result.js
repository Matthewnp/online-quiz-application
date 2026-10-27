import {useState } from 'react';

export default function Result() {
  const [data, setData] = useState(null);

const stored = localStorage.getItem('quizResult');
    if (stored) setData(JSON.parse(stored));

  if (!data) {
    return <p className="text-slate-500">No quiz result found.</p>;
  }

  const { score, correct, total, review } = data;
  const message =
    score >= 80 ? 'Excellent work!' :
    score >= 50 ? 'Good job!' :
                  'Better luck next time.';

  return (
    <div>
      <div id="scoreCircle">{score}%</div>
      <p id="summary">
        You got {correct} out of {total} questions correct. {message}
      </p>

      <div id="reviewList">
        {review.map((r, i) => (
          <div
            key={r.questionId ?? i}
            className={`review-item ${r.isCorrect ? 'correct' : 'wrong'}`}
          >
            Q{i + 1}: Your answer {r.selected_option || '-'} —{' '}
            {r.isCorrect
              ? 'Correct'
              : `Incorrect (correct: ${r.correct_option})`}
          </div>
        ))}
      </div>
    </div>
  );
}