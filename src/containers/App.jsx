import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/styles/App.scss';
import { AppRouter } from '../routes/AppRouter';

const App = () =>{
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;