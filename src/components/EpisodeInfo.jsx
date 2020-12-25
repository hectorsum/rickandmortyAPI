import React from 'react'
import { useParams } from 'react-router-dom'
import useInitialState from '../hooks/useInitialState'

export const EpisodeInfo = () => {
  const {id} = useParams()
  const {data,loading} = useInitialState(id);

  // const data = results.find(episode => episode.id === parseInt(id))
  // const { name,air_date,episode,characters } = data;
  const {air_date } = data
  return (
    <div>
      <h1>Episode Info {id}</h1>
      <hr/>
        <div>
          { loading && <h1 className="animate__animated animate__flash">Loading</h1> }
        </div>
        <ul>
          <h1>{air_date}</h1>
        </ul>
    </div>
  )
}
