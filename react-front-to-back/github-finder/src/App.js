import React from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import './App.css';
import {
  IonApp,
} from '@ionic/react';


//=================================
//Class Component
//=================================
class App extends React.Component {
  state = {
    users: [],
    loading: false
  }
  
  //Lifecycle method
//   async componentDidMount(){
//     this.setState({loading: true})
//     const res = await axios.get('https://api.github.com/users')
//     this.setState({ users: res.data, loading: false });
//   }
  
  //searcch Github users
  searchUsers = async (text) => {
    this.setState({loading : true})
    if(text !== ""){
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
      this.setState({ users: res.data.items, loading: false });
    }else{
      const res = await axios.get('https://api.github.com/users')  
       this.setState({ users: res.data, loading: false });
    }
   
  }
  
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }
  
  render() {
   {/* 
    example use numbers for to test proptypes string 
    const numbers = 1
  */}
    const {loading, users} = this.state;
    
    return (
      <IonApp>
          {/*
            example use numbers for to test proptypes string
            <Navbar title={numbers} icon="icon ion-logo-github" />
          */}
          <Navbar title="Github Finder" icon="icon ion-logo-github" />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}  
          />
          <Users loading={loading} users={users}/>
       
      </IonApp>
    );
  }
}

//=================================
//Function Component
//=================================
// function App() {
//   return (
//     <div className="App">
//      <h1>it's fine</h1>'
//     </div>
//   );
// }

export default App;
