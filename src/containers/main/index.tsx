import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';

class Main extends React.Component<any, any> {

  render() {
    return (
      <>       
		<BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>  
		</BrowserRouter>		  
      </>
    )
  }

}

export default Main;