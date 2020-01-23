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
    const {showClear,clearUsers } = this.props;
    return (
    <>
      <form onSubmit={this.onSubmit}>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Search User</IonLabel>
              <IonInput 
                  name="text"
                  onIonChange={this.onChange} 
                  value={this.state.text} 
                  ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonButton type="submit" expand="block" color="dark">Search</IonButton>
           </IonCol>
       </IonRow>
     </form>
    {showClear && (
      <IonRow>          
            <IonCol>
                <IonButton expand="block" color="light" onClick={clearUsers}>Clear</IonButton>
           </IonCol>
       </IonRow>
    )}
    
    </>
   );
  }
}


export default Search