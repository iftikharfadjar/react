//for function component
import React from 'react';
//for class component
// import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import {
  IonCard,
  IonButton,
  IonItem,
  IonAvatar,
  IonLabel
} from '@ionic/react';

//=================================================================
//          STATELESS FUNCTIONAL COMPONENT
//=================================================================
//common way
// const UserItem = (props) => {
    //for re-variable of this.state
    //const {login, avatar_url, html_url} = props.user;

// another way
const UserItem = ({user:{login, avatar_url, html_url}}) => {

    return (
    <>
      <IonCard >
        <IonItem>
            <IonAvatar slot='start'>
                <img src={avatar_url} alt="avatar" style={{borderRadius:'50%'}} />
            </IonAvatar >
            <IonLabel>
              <h1>{login}</h1>
              <IonButton  href={html_url} color="dark">more..</IonButton>
            </IonLabel>
          </IonItem>
      </IonCard>
    </>
   );
 
}


//=================================================================
//          CLASS COMPONENT
//=================================================================
// class UserItem extends Component {
//   constructor(){
//     super();
//     this.state = {
//       id: 'id',
//       login: 'mojombo',
//       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//       html_url:"https://github.com/mojombo"
//     }
//   }
  
//   render(){
//     //for re-variable of this.state
//     const {login, avatar_url, html_url} = this.props.user;
    
//     return (
//     <>
//       <IonCard >
//         <IonItem>
//             <IonAvatar slot='start'>
//                 <img src={avatar_url} alt="avatar" style={{borderRadius:'50%'}} />
//             </IonAvatar >
//             <IonLabel>
//               <h1>{login}</h1>
//               <IonButton  href={html_url} color="dark">more..</IonButton>
//             </IonLabel>
//           </IonItem>
//       </IonCard>
//     </>
//    );
//   }
// }


export default UserItem