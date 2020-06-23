import React from 'react';
import Homepage from './page/homepage/homepage.compo';
import Items from './page/shop/shop.compo.jsx';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
   <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>/>
        <Route  path='/shop' component={Items}></Route>/>
     </Switch>
  </BrowserRouter>

    </div>
  );
}

export default App;
