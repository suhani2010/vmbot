import React from "react";

import "./Options.css";

const Options = (props) => {
    const options = [
        {
            text: "Linux",
            handler: props.actionProvider.handleLinuxQuiz,
            id: 1
        },
        {
            text: "Docker",
            handler: props.actionProvider.handleDockerQuiz,
            id: 2
        },
        {
            text: "Sql",
            handler: props.actionProvider.handleSqlQuiz,
            id: 3
        },
    ];
    const optionsList = options.map((option)=>(
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));
        return <div className="options-container">
            <p>{optionsList}</p>
        </div>
};

export default Options;