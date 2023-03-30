import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Experience from './components/Experience';
import Time from './components/Time';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/tapasztalat' element={<Experience />}/>
          <Route path='/idopont' element={<Time />}/>
        </Routes>
      </main>
    </div>
  }
}
export default App;