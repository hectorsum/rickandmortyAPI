import React, { Component } from 'react'
import PropTypes from 'prop-types'
import useInitialState from '../hooks/useInitialState';


const Character = ({children}) =>{
  return (
    <div className="container">
      <div className="grid-character row">
        {children}
      </div>
    </div>
  )
}

export default Character;