import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import UserItem from './UserItem'
import Search from './Search'

import {
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonLoading
} from '@ionic/react';


//=================================================================
//          STATELESS FUNCTIONAL COMPONENT
//=================================================================
const Users = ({loading, users}) => {
    
    if(loading){
      return (
      <>
        <IonContent>
          <IonLoading
            isOpen={loading}
            message={'Loading...'}
            spinner="circles"
          />
        </IonContent>
      </>
      )
    }
    else{
      return (
      <>
         <IonContent>
           <Search/>
          <IonGrid Fixed>
            <IonRow>
                {users.map(user => (
                  <IonCol  size-lg="3" size-md="4" size-sm="6" size-xs="12" key={user.id}>
                      <UserItem user={user}/>
                  </IonCol>
                ))}

            </IonRow>
          </IonGrid>
       </IonContent>
      </>
     );
   }
  
}

//=================================================================
//          CLASS COMPONENT
//=================================================================
// class Users extends Component {
// //data sample
// //   constructor(){
// //     super();
// //     this.state = {
// //       users : props.users
// //       users: [
// //         {
// //           id: '1',
// //           login: 'mojombo',
// //           avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
// //           html_url:"https://github.com/mojombo"
// //         },
// //         {
// //           id: '2',
// //           login: "defunkt",
// //           avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
// //           html_url: "https://github.com/defunkt",
// //         },
// //         {
// //           login: "pjhyett",
// //           id: '3',
// //           avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
// //           html_url: "https://github.com/pjhyett",
// //         }
// //       ]
// //     }
// //   }
  
//   render(){
//     //for re-variable of this.state
//     return (
//     <>
//        <IonContent>
//         <IonGrid Fixed>
//           <IonRow>
//               {this.props.users.map(user => (
//                 <IonCol  size-lg="3" size-md="4" size-sm="6" size-xs="12" key={user.id}>
//                     <UserItem user={user}/>
//                 </IonCol>
//               ))}
   
//           </IonRow>
//         </IonGrid>
//      </IonContent>
//     </>
//    );
//   }
// }


export default Users