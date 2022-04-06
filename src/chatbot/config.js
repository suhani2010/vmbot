import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName:"Beta",
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;