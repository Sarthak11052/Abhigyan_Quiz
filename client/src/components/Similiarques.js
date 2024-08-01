import React, { useState } from "react";
import { useSelector } from "react-redux";

/** Custom Hook */
import { useFetchQestion } from "../hooks/FetchQuestion";

export default function Similiarques({ checkPoint }) {
  const [{ isLoading, serverError }] = useFetchQestion();
  const allQues = useSelector((state) => state.questions.queue);

  // Slice questions based on checkPoint
  const tirmedQuestions = allQues.slice(
    4 * checkPoint + checkPoint,
    4 * checkPoint + checkPoint + 5
  );

  // State to track selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Handle selection of an answer
  function onSelect(quesId, optionIdx) {
    setSelectedAnswers((prev) => ({ ...prev, [quesId]: optionIdx }));
  }

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
      {tirmedQuestions.map((q, i) => (
        <div className="question" key={q?.id}>
          <h2 className="text-light">{q?.question}</h2>
          <ul>
            {q?.options.map((o, j) => {
              const isSelected = selectedAnswers[q.id] === j;
              const isCorrect = q.ans === j;

              return (
                <li key={j}>
                  <input
                    type="radio"
                    name={`q-${q.id}-option`}
                    id={`q-${q.id}-o${j}-option`}
                    onChange={() => onSelect(q.id, j)}
                  />
                  <label
                    className={`text-primary ${
                      isSelected ? (isCorrect ? "correct" : "incorrect") : ""
                    }`}
                    htmlFor={`q-${q.id}-o${j}-option`}
                  >
                    {o}
                  </label>
                  <div className="check"></div>
                </li>
              );
            })}
          </ul>
          {selectedAnswers[q.id] !== undefined && (
            <div>
              {selectedAnswers[q.id] === q.ans ? (
                <p className="text-success">Correct</p>
              ) : (
                <p className="text-danger">Incorrect</p>
              )}
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        .correct {
          color: green;
        }
        .incorrect {
          color: red;
        }
        .text-primary {
          color: #007bff;
        }
        .text-light {
          color: #f8f9fa;
        }
        .text-success {
          color: green;
        }
        .text-danger {
          color: red;
        }
      `}</style>
    </div>
  );
}
