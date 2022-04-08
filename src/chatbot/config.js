import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import Options from '../components/Options/Options';
import Enquirylist from '../components/Enquirylist/Enquirylist';
import Raiseissue from '../components/Raiseissue/Raiseissue';
import Issue from '../components/Raiseissue/Issue';
const config = {
  botName: "BetaBot",
  initialMessages: [
    createChatBotMessage(`Hey, I'm Chatbot your personal helper...

    If you need to get help, just type or press on one of this topic`,
  {
    widget: "options",
  })
],
 widgets: [
     {
     	widgetName: "options",
    	widgetFunc: (props) => <Options {...props} />,
     },
     {
      widgetName: "enquiry",
      widgetFunc: (props) => <Enquirylist {...props} />,
      // props: {
      //   options: [
      //     {
      //       text: "Product Enquiry",
      //       url:
      //         "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
      //       id: 1,
      //     },
      //     {
      //       text: "Other Enquiry",
      //       url:
      //         "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      //       id: 2,
      //     },
      //   ],
      // }
    },
    {
      widgetName: "issue",
      widgetFunc: (props) => <Raiseissue {...props} />,
    },
    {
      widgetName: "faq",
      widgetFunc: (props) => <Raiseissue {...props} />,
    },
    {
      widgetName: "order",
      widgetFunc: (props) => <Raiseissue {...props} />,
    },
    // {
    //   widgetName: "renderissue",
    //   widgetFunc: (props) => <Issue {...props} />,

    // },
    {
      widgetName: "renderreturn",
      widgetFunc: (props) => <Issue {...props} />,
      props: {
        type: "Return"
      }
    },
    {
      widgetName: "renderorder",
      widgetFunc: (props) => <Issue {...props} />,
      props: {
        type: "Order"
      }
    }
     
 ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  
 
};

export default config;