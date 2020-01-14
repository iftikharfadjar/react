import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
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
  IonBackButton
} from '@ionic/react';

export class Navbar extends Component {
  //it will be used when there is no props from parents
  static defaultProps = {
    title : 'my Navbar',
    icon : 'icon ion-logo-github'
  };

  //propTypes is used to filter checking of props
  static propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
  }
  render(){
    return (
     <>
    <IonHeader>
      <IonToolbar>

        <IonTitle>  <i className={this.props.icon}></i> {this.props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>

   
  </>
    )
  }
}


export default Navbar