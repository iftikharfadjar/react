import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

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
  IonButtons,
  IonButton,
  IonSearchbar,
  IonBackButton,
  IonItem,
  IonRow,
  IonGrid,
  IonCol,
  IonImg
} from '@ionic/react';

export class UserItem extends Component {
  constructor(){
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url:"https://github.com/mojombo"
    }
  }
  
  render(){
    //for re-variable of this.state
    const {login, avatar_url, html_url} = this.state;
    
    return (
    <>
       <IonContent>
         <IonCard className="ion-text-center">
            <div className="ion-text-center">
                <img src={avatar_url} style={{width: 'auto'}}/>
            </div>
            <IonCardHeader>
            {/*<IonCardSubtitle>Card Subtitle</IonCardSubtitle>*/}
              <IonCardTitle>{login}</IonCardTitle>
            </IonCardHeader>

            <IonItem href={html_url}>
              <IonButton color="dark">more..</IonButton>
            </IonItem>

         </IonCard>
     </IonContent>
    </>
   );
  }
}


export default UserItem