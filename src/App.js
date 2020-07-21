import React from 'react';
import Homepage from './page/homepage/homepage.compo';
import Items from './page/shop/shop.compo.jsx';
import Header from './components/header/header-functions.compo.jsx';
import SigninAndUp from './page/register/sign-in-and-up.compo';
import signUp from './page/Sign-up/sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    };
  }

  //prevent memory leak in Javascript, close subscription
  unsubscribe = null

  // function to listen to the changes in state of the current user
  // user sign in or sign out
  // this is a open subscription
  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapshot =>{
           this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
           });
         });
      }
    
      this.setState({currentUser:userAuth});
      
    })
  }

  compoUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <div >
     <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={Homepage}></Route>/>
          <Route  path='/shop' component={Items}></Route>/>
          <Route  path='/register' component={SigninAndUp}></Route>/>
          <Route path='/Sign-up'component={signUp}></Route>
       </Switch>
    </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
