import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/** Custom Hook */
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
  const explanations = [
    "This is",
    "That is",
    "Who is",
    "Why is",
    "That's why is",
  ];
  const [checked, setChecked] = useState(undefined);
  const [showExplanation, setShowExplanation] = useState(false);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked !== undefined) {
      dispatch(updateResult({ trace, checked }));
    }
  }, [trace, checked, dispatch]);

  useEffect(() => {
    setChecked(undefined);
    setShowExplanation(false);
  }, [trace]);

  function onSelect(i) {
    setChecked(i);
    onChecked(i);
  }

  function toggleExplanation() {
    setShowExplanation((prevState) => !prevState);
  }

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="questions">
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
                .btn-info {
                   padding: 10px 20px 10px 20px; 
                    margin: 10px 0 0 0; 
                    background-color: blue;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }
                .btn-info:hover {
                    background-color: darkblue;
                    
                }
                .explanation {
                    color: white;
            `}</style>
      <h2 className="text-light">Q: {questions?.id}</h2>
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => {
          let optionClass = "";

          return (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />
              <label
                className={`text-primary ${
                  checked !== undefined && checked === i ? optionClass : ""
                }`}
                htmlFor={`q${i}-option`}
              >
                {q}
              </label>
              <div
                className={`check ${result[trace] === i ? "checked" : ""}`}
              ></div>
            </li>
          );
        })}
      </ul>
      {checked !== undefined && (
        <div>
          {questions.ans === checked ? (
            <p className="text-success">Correct</p>
          ) : (
            <p className="text-danger">Incorrect</p>
          )}
        </div>
      )}

      <button onClick={toggleExplanation} className="btn btn-info">
        {showExplanation ? "Hide Explanation" : "Show Explanation"}
      </button>
      {showExplanation && <p className="explanation">{explanations[trace]}</p>}
    </div>
  );
}
