import React from 'react';
import './App.css';
import Main from './containers/main';
import Home from './pages/home';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
