import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import UserItem from './UserItem'

import {
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/react';

export class Users extends Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          id: '1',
          login: 'mojombo',
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url:"https://github.com/mojombo"
        },
        {
          id: '2',
          login: "defunkt",
          avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
          html_url: "https://github.com/defunkt",
        },
        {
          login: "pjhyett",
          id: '3',
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          html_url: "https://github.com/pjhyett",
        }
      ]
      
    }
  }
  
  render(){
    //for re-variable of this.state
    return (
    <>
       <IonContent>
        <IonGrid>
          <IonRow >
              {this.state.users.map(user => (
                <IonCol key={user.id}>
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


export default Users