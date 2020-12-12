import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Character from '../components/Character';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'https://rickandmortyapi.com/api/character';

const App = () =>{
  const initialState = useInitialState(API);
  console.log(initialState.results);
  return (
    <>
      <Navbar/>
      <Character>
        {
          initialState.results.map( item => <Card key={item.id} name={item.name} image={item.image} /> )
        }
      </Character>
    </>
    //initialState.results.map(item => <img src={item.image} alt="dsa"/>)
  );
}

export default App;