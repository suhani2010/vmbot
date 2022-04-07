import React from "react";

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleLinuxQuiz = () => {
      console.log("CLICKED LINUX;")
      const message = this.createChatbotMessage(
        "Sure! Here's your Linux QUIZ !",
        {
          widget: "linux"
        }
      );
      this.setChatbotMessage(message);
    };
    handleDockerQuiz = () => {
      const message = this.createChatbotMessage(
        "Sure! Here's your Docker QUIZ !",
        {
          widget: "docker"
        }
      );
      this.setChatbotMessage(message);
    };
    handleSqlQuiz = () => {
      const message = this.createChatbotMessage("Sure! Here's your SQL QUIZ !", {
        widget: "sql"
      });
      this.setChatbotMessage(message);
    };

  handleHello(){
    const message = this.createChatbotMessage('heeyyy!');

    this.setChatbotMessage(message);
  }

  handleContinue = () => {
    const message = this.createChatbotMessage(
      "Which quiz you want to try again?",
      {
        widget: "options"
      }
    );
    this.setChatbotMessage(message);
  };

  messageHandler = () => {
    const message = this.createChatbotMessage(
      "Hello,what do you want to learn",
      {
        widget: "options"
      }
    );
    this.setChatbotMessage(message);
  };
  setChatbotMessage = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages]
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages]
      }));
    }
  };
}

  export default ActionProvider;