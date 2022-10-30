import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import SimpleReactLightbox from "simple-react-lightbox";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import {store} from './store';
import ThemeContext  from "./context/ThemeContext";


ReactDOM.render(
	<React.StrictMode>
		<Provider store = {store}>
            <SimpleReactLightbox>
                <BrowserRouter basename=''>
                    <ThemeContext>
                        <App />
                    </ThemeContext>  
                </BrowserRouter>    
            </SimpleReactLightbox>
        </Provider>	
	</React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
