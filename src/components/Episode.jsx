import React, { useState } from 'react'
import useInitialStateAllEpisodes from '../hooks/useInitialStateAllEpisodes';
import '../assets/styles/components/Episodes.scss';
import { Link } from 'react-router-dom';
const API = 'https://rickandmortyapi.com/api/episode';
export const Episode = () => {
  const {data} = useInitialStateAllEpisodes(API);
  console.log(data);
  const [season,setSeason] = useState("S01");
  const handleChange = (e) =>{
    return setSeason(e.target.value);
  }
  return (
    <>
      <div className="container mt-2">
        <select name="season-selector" value={season} className="season-selector" onChange={handleChange}>
          <option value="S01">Season 01</option>
          <option value="S02">Season 02</option>
        </select>
        <hr/>
        <div className="episodes-wrapper row d-flex justify-content-center mt-4 mb-4 animate__animated animate__jackInTheBox">
        {
          data.map(episode => (
            episode.episode.includes(season) && (
              <div key={episode.id} className="info-card m-3">
                <h3 className="m-0">{episode.name}</h3>
                <hr/>
                <i><b>Release:</b> {episode.air_date}</i>
                <Link to={`./episodes/${episode.id}`}>
                  More...
                </Link>
              </div>
            )
          ))
        }
        </div>
      </div>
    </>
  )
}
