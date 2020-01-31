import React, { Fragment, Component } from 'react';

import {
  IonContent,
} from '@ionic/react';

const About = () => {
  return (
    <Fragment>
    <>
      <IonContent>
        <h1>About This App</h1>
        <p>App to search Github Users</p>
        <p>Version: 1.0.0</p>
     </IonContent>
    </>
    </Fragment>
  )
}

export default About;
