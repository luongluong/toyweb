import React from 'react';
import Homepage from './page/homepage/homepage.compo';
import Items from './page/shop/shop.compo.jsx';
import Header from './components/header/header-functions.compo.jsx';
import SigninAndUp from './page/register/sign-in-and-up.compo';
import signUp from './page/Sign-up/sign-up';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
   <BrowserRouter>
      <Header />
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

export default App;
