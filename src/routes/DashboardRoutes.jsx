import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Episode } from '../components/Episode';
import { EpisodeInfo } from '../components/EpisodeInfo';
import Character from '../components/Character';
import Navbar from '../components/Navbar';
import { CharacterInfo } from '../components/CharacterInfo';
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/characters" component={ Character }/>
          <Route exact path="/characters/:id" component={ CharacterInfo }/>
          <Route exact path="/episodes" component={ Episode }/>
          <Route exact path="/episodes/:id" component={ EpisodeInfo }/>
          <Redirect to="/characters"/>
        </Switch>
      </div>
    </>
  )
}