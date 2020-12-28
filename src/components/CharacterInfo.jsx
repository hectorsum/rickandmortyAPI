import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useInitialStateCharacter from '../hooks/useInitialStateCharacter'
import "../assets/styles/components/CharacterInfo.scss";
export const CharacterInfo = () => {
  const {id} = useParams();
  const {data,loading} = useInitialStateCharacter(id);
  const {name,status,species,gender,name_location,image} = data;
  const history = useHistory();
  const handleBack = () =>{
    return history.length<=2 ? history.push('/') : history.goBack();
  }
  return (
    <div className="container mt-2 mb-3">
      <h1 className="display-4">{name}</h1>
      <hr/>
      { loading && <h1 className="animate__animated animate__flash">Loading..</h1> }
      <div className="d-flex info-wrapper">
        <img src={image} alt={name} className="animate__animated animate__rollIn"/>
        <div className="w-100">
          <div className="info-character d-flex flex-column justify-content-center animate__animated animate__zoomIn">
            <span><img src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png" alt={name_location}/> <b>Location:</b> {name_location}</span>
            <span><img src="https://img.icons8.com/material/24/000000/connection-status-off.png" alt={status}/> <b>Status:</b> {status}</span>
            <span><img src="https://img.icons8.com/material/24/000000/transgender.png" alt={gender}/> <b>Gender:</b> {gender}</span>
            <span><img src="https://img.icons8.com/material/24/000000/boy.png" alt={species}/> <b>Species:</b> {species}</span>
            <button type="button" className="btn btn-primary w-50 mt-2" onClick={handleBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}
