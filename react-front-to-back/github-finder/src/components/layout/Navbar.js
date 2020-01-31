//for function component
import React from 'react';
//for class component
// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { Link } from 'react-router-dom';

import {
   IonHeader, IonContent, IonToolbar, IonButtons, IonButton,IonBackButton, IonTitle, IonList
} from '@ionic/react';

//=================================================================
//          STATELESS FUNCTIONAL COMPONENT
//=================================================================
//common way
// const Navbar = (props) => {
//another way
const Navbar = ({ icon , title}) => {
  
    return (
      <>
      <IonHeader>
        <IonToolbar color="dark">
          {/*common way
          //<IonTitle>  <i className={props.icon}></i> {props.title}</IonTitle>
          */}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>  <i className={icon}></i> {title}</IonTitle>
          
          <IonButton href='/' color="dark" slot="end">
            Home
          </IonButton>

          <IonButton href='/about' color="dark" slot="end">
            About
          </IonButton>
          
        </IonToolbar>
      
      
      </IonHeader>
      </>
    )
  
}

//it will be used when there is no props from parents
  Navbar.defaultProps = {
    title : 'my Navbar',
    icon : 'icon ion-logo-github'
  };

  //propTypes is used to filter checking of props
  Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
  }

//=================================================================
//          CLASS COMPONENT
//=================================================================
// class Navbar extends Component {
//   //it will be used when there is no props from parents
//   static defaultProps = {
//     title : 'my Navbar',
//     icon : 'icon ion-logo-github'
//   };

//   //propTypes is used to filter checking of props
//   static propTypes = {
//     title : PropTypes.string.isRequired,
//     icon : PropTypes.string.isRequired
//   }
//   render(){
//     return (
//       <>
//       <IonHeader>
//         <IonToolbar color="dark">
//           <IonTitle>  <i className={this.props.icon}></i> {this.props.title}</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       </>
//     )
//   }
// }


export default Navbar