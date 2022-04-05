import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import './style.css';
// import {myfunction} from './myfunction';


function Widgeticons() {
    const shoot = () => {
        
        var x = document.getElementById("show");
        if (x.style.display === "none") {
          x.style.display = "block";
          x.style.animation = "move-in-steps 8s infinite";
        } else {
          x.style.display = "none";
        }
      }
    
      useEffect(() => {
        addResponseMessage('Welcome to this **awesome** chat!');
      }, []);
    
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };   
    
        
   
    return(<><div class='circle-container'>
    <div class="wrapper center" id="show">
         <div class="icon facebook deg0">
            <div class="tooltip">
               Facebook
            </div>
            <span><i class="fab fa-facebook-f"></i></span>
         </div>
         <div class="icon twitter deg20">
            <div class="tooltip">
               Twitter
            </div>
            <span><i class="fab fa-twitter"></i></span>
         </div>
         <div class="icon instagram deg45">
            <div class="tooltip">
               Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
         </div>
         <div class="icon github deg135">
            <div class="tooltip">
               Github
            </div>
            <span><i class="fab fa-github "></i></span>
         </div>
         <div class="deg180">
            
            <span><Widget
          handleNewUserMessage={handleNewUserMessage}
          
          title="My new awesome title"
          subtitle="And my cool subtitle"
          emojis="false"
          
        /></span>
         </div>
      </div>
     <div class="wrapper">
         <div class="icon expand">
            <div class="tooltip">
               Click 
            </div> 
            <button className='btnn' onClick={shoot}><span><i class="fa-solid fa-expand" ></i></span></button>
         </div>
     </div>
     
    </div>
</>
);
}
export default Widgeticons;