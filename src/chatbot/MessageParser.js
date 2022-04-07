import React from "react";

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      if(lowerCaseMessage.includes('hello') || lowerCaseMessage.includes("hi")){
        this.actionProvider.messageHandler();
      }
      if (lowerCaseMessage.includes("continue")) {
        this.actionProvider.handleContinue();
      }
      if (lowerCaseMessage.includes("linux")) {
        this.actionProvider.handleLinuxQuiz();
      } else if (lowerCaseMessage.includes("docker")) {
        this.actionProvider.handleDockerQuiz();
      } else if (lowerCaseMessage.includes("sql")) {
        this.actionProvider.handleSqlQuiz();
      }
      
      // if (message.includes('dog')) {
      //   this.actionProvider.handleDog();
      // }
    }
  }
export default MessageParser;