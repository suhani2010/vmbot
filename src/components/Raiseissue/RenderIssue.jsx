import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../Options.css';
import axios from "axios";

const RenderIssue = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [array,setArray] = useState([]);

  const { id, question, options } = data[index];

  function checkBoundary(index) {
    if (index < 0) setIndex(data.length - 1);
    else if (index >= data.length) 
    {
      document.getElementById("last").innerHTML="<p>Please click on submit now</p>";
    }
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

    console.log(array)

    axios.post('http://localhost:5000/send_mail',array)
    .then(res=>{
      setArray([]);
      console.log('sent');
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  const handleChange = (e) => {

    e.preventDefault();
    setArray([...array,e.target.value]);
    
    nextQs();

  };

  // console.log(array)

  return (
    <main>
      {submit === false && (
        <div className="quiz-container ">
          <div id="last">
          <p key={id}>{question}</p>
          <div >
            {newans.map((eachOption) => (
              <p>
                
                <button
                  type="radio"
                  name="radio"
                  value={options[Object.values(options).indexOf(eachOption)]}
                  onClick={handleChange}
                  className="mybutton btnn1"
                >
                  {options[Object.values(options).indexOf(eachOption)]}
                  </button>
                {/* {eachOption} */}
              </p>
            ))}
          </div>
          </div>
          {/* {submit === false && (
            <button className="prev-btn" onClick={() => prevQs()}>
              <FaChevronLeft />
            </button>
          )} */}
          {/* {submit === false && (
            <button className="next-btn" onClick={() => nextQs()}>
              <FaChevronRight />
            </button>
          )} */}
        </div>
      )}
      <div>
        {submit === false && <button className="mybutton" onClick={handleSubmit}>Submit</button>}
        {submit === true && <p className="score">Ticket Geneterated Succesfully , Thank you! </p>}
        {submit === true && (
          <p className="score">Type Continue to go to menu!</p>
        )}
      </div>
    </main>
  );
};
export default RenderIssue;