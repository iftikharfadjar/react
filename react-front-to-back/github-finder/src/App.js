import React from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css';
import {
  IonApp,
} from '@ionic/react';


//=================================
//Class Component
//=================================
class App extends React.Component {
  render() {
   {/* 
    example use numbers for to test proptypes string 
    const numbers = 1
  */}
    return (
      <IonApp>
          {/*
            example use numbers for to test proptypes string
            <Navbar title={numbers} icon="icon ion-logo-github" />
          */}
          <Navbar title="Github Finder" icon="icon ion-logo-github" />
          <Users/>
       
      </IonApp>
    );
  }
}

//=================================
//Function Component
//=================================
// function App() {
//   return (
//     <div className="App">
//      <h1>it's fine</h1>'
//     </div>
//   );
// }

export default App;
