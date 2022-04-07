import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture.jsx'
import Options from "../components/Options/Options.jsx";
import Quiz from "../components/Quiz/Quiz"

const config = {
    botName:"Beta",
  initialMessages: [createChatBotMessage(`Hello what do you want to learn?`,{
      widget:"options",
    })
  ],
  state: {
    linux: [],
    sql: [],
    docker: []
  },
  widgets: [
    // {
    //   widgetName: 'dogPicture',
    //   widgetFunc: (props) => <DogPicture {...props} />,
    // },
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "linux",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        course: "Linux"
      }
    },
    {
      widgetName: "docker",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        course: "Docker"
      }
    },
    {
      widgetName: "sql",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        course: "Sql"
      }
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#04e0d2',
    },
    chatButton: {
      backgroundColor: '#04e0d2',
    },
  },
  customComponents: {
    // Replaces the default header
  //  header: () => <div style={{ backgroundColor: '#03a394', padding: "5px", borderRadius: "3px",fontSize:"15px" }}>Conversation with Beta</div>
 },
};

export default config;