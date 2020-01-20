import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonCol,
  IonGrid,
  IonRow
} from '@ionic/react';


//=================================================================
//          CLASS COMPONENT
//=================================================================
class Search extends Component {
  render(){
    return (
    <>
      <IonGrid Fixed>
        <IonRow>
          <IonCol size="3">
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="1">
              <div>
                <IonButton expand="block" color="dark">Search</IonButton>
              </div>
          </IonCol>
        <IonCol size="8"></IonCol>
       </IonRow>
      </IonGrid>
    </>
   );
  }
}


export default Search