import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonCol,
  IonGrid,
  IonRow

} from '@ionic/react';


//=================================================================
//          CLASS COMPONENT
//=================================================================
class Search extends Component {
    state = {
      text : ''
    };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text)
    this.setState({ text: ''})
  }
  
  render(){
    return (
    <>
      <form onSubmit={this.onSubmit}>
      <IonGrid>
        <IonRow>
          <IonCol size="3">
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput 
                  name="text"
                  onIonChange={this.onChange} 
                  value={this.state.text} 
                  placeholder="username login"></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="1">
              <div>
                <IonButton type="submit" expand="block" color="dark">Search</IonButton>
              </div>
          </IonCol>
        <IonCol size="8"></IonCol>
       </IonRow>
      </IonGrid>
     </form>
    </>
   );
  }
}


export default Search