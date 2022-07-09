import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {store} from "./store/store";    //transfer data stored in a common workspace
import {Provider} from "react-redux";   //bind REACT REDUX



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  // </React.StrictMode>
);
