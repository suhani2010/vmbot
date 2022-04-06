import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Draggable from 'react-draggable';

import 'react-chat-widget/lib/styles.css';
import Widgeticons from './components/Widgetsicons';

import logo from './logo.svg';

function App() {
 
    return (
      <div className="App">
        <Draggable>
          <div>
            <Widgeticons />
          </div>
        </Draggable>
      </div>
    );
}

export default App;