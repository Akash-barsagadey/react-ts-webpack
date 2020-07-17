import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.less';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Welcome to typescript Akash
        </p>

        <Button>Akash</Button>
      </header>
    </div>
  );
}

export default App;
