import React, { Component } from 'react';

//Import Ionic 4 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './App.css';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';


import axios from 'axios';


class App extends Component {
  API_KEY = 'd9d139d1426f4244a55af04b8acd66fa';
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`

  state = {
    items: []
  }

  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }
  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>News App v1.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.state.items.map((item) => (
                <IonCard>
                  <img src={item.urlToImage}/>
                <IonCardHeader>

                <IonCardTitle>
                {item.title}

                </IonCardTitle>
                 <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>

                </IonCardHeader>
                <IonCardContent>
                  <p>{item.content}</p>
                  <IonButton href={item.url}> Read</IonButton>
                </IonCardContent>
                </IonCard>

      ))}

      </IonContent>
    </IonApp>

    );
  }
}

export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
