import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import {AppRouter} from './routes/AppRouter'
const  App = () => {
  return (
    <>
      <NavBar/>
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;