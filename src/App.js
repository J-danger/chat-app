import React from 'react';
import Dashboard from './Dashboard'
import Store from './Store'
import Nickname from './Nickname'
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Store>
          <Dashboard />            
          <Nickname/>        
        </Store> 
    </div>
  );
}

export default App;
