import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Quiz.css";

const RenderIssue = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);

  //console.log(data);

  const { id, question, options } = data[index];

  function checkBoundary(index) {
    if (index < 0) setIndex(data.length - 1);
    else if (index >= data.length) setIndex(0);
    else
     setIndex(index);
  }

  function nextQs() {
    const newIndex = index + 1;
    checkBoundary(newIndex);
  }
  function prevQs() {
    const newIndex = index - 1;
    checkBoundary(newIndex);
  }

  //used to remove null mcqs in list
  const newans = Object.values(options).filter((x) => {
    return x !== null;
  });

  function handleSubmit() {
    const submit1 = !submit;
    setSubmit(submit1);
  }
 
  const handleChange = (e) => {
    e.preventDefault();

    const { value } = e.target;
    // const search = Object.values(correct_answers).filter((x, i) => {
    //   if (x !== "false") return i;
    //   return -1;
    // });
    // const ans1 = Object.values(search).indexOf("true");
    // const value1 = parseInt(value);
    // if (ans1 === value1) handleScore();
  };

  return (
    <main>
      {submit === false && (
        <div className="quiz-container">
          <p key={id}>{question}</p>
          <div>
            {newans.map((eachOption) => (
              <p>
                <input
                  type="radio"
                  name="radio"
                  value={Object.values(options).indexOf(eachOption)}
                  onChange={handleChange}
                />
                {eachOption}
              </p>
            ))}
          </div>
          {submit === false && (
            <button className="prev-btn" onClick={() => prevQs()}>
              <FaChevronLeft />
            </button>
          )}
          {submit === false && (
            <button className="next-btn" onClick={() => nextQs()}>
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
      <div>
        {submit === false && <button onClick={handleSubmit}>Submit</button>}
        {submit === true && <p className="score">Ticket Geneterated Succesfully , Thank you! </p>}
        {submit === true && (
          <p className="score">Type Continue to go to menu!</p>
        )}
      </div>
    </main>
  );
};
export default RenderIssue;