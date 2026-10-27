// components/QuestionCard.jsx
import OptionButton from './OptionButton';

export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <div>
      {/* Question label + text */}
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Question
        </span>
        <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
          {question.question_text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {['A', 'B', 'C', 'D'].map(key => {
          const text = question[`option_${key.toLowerCase()}`];
          if (!text) return null;
          return (
            <OptionButton
              key={key}
              label={key}
              text={text}
              selected={selected === key}
              onClick={() => onSelect(question.id, key)}
            />
          );
        })}
      </div>
    </div>
  );
}