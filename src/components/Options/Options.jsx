import React from "react";

import "./options.css";

const Options = (props) => {
  const options = [
    { text: "Product Enquiry", handler: props.actionProvider.handleEnquiry, id: 1 },
    { text: "Raise an Issue", handler: props.actionProvider.handleIssue, id: 2 },
    { text: "FAQ", handler: () => {}, id: 3 },
    { text: "Order", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;