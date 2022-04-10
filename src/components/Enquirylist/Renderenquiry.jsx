import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../Options.css';

const Renderenquiry = () => {
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [array,setArray] = useState([]);

  function handleSubmit() {
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("prid").value);
    console.log(document.getElementById("prquery").value);
    setArray([document.getElementById("email").value,document.getElementById("prid").value,document.getElementById("prquery").value]);
    // console.log(array);
    const submit1 = !submit;
    setSubmit(submit1);

    //console.log(array)
  }
  //console.log(array);

  return (
    <main><form>
      {submit === false && (
        <div className="quiz-container ">
          <div id="last">
          <div >
              
              <label>Enter your email id : </label>
              <input id="email" type="email" required />
              <label>Enter your product id : </label>
              <input id="prid" type="text" />
              
              <label>Enter your product query : </label>
              <input id="prquery" type="text" />
              
          </div>
          </div>
        </div>
      )}
      <div>
        {submit === false && <button className="mybutton" onClick={handleSubmit}>Submit</button>}
        {submit === true && <p className="score">Ticket Geneterated Succesfully , Thank you! </p>}
        {submit === true && (
          <p className="score">Type Continue to go to menu!</p>
        )
        }
      </div>
      </form>
    </main>
  );
};
export default Renderenquiry;