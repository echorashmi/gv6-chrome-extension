import React from 'react';
import { Redirect, Route } from 'react-router-dom'; //Route: Matching the URL with components.

/* Ionic Imports */
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'; //Wraps ReactRouter's BrowserRouter component

import Home from './pages/Home'; 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*
React Component: Sets up the initial routing for the app. 
Includes core Iconic components for animations and layout i.e. IonApp and IonRouterOutlet.
*/
const App: React.FC = () => ( 
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} /> 
        <Route exact path="/" render={() => <Redirect to="/home" />} /> 
        {/* 
          In React - for data binding, value is passed in curly braces 
          So, the component={Home} is the Home Component from line 8. 
        
        */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
