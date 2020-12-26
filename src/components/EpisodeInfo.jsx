import React from 'react'
import { useParams } from 'react-router-dom'
import useInitialStateEpisode from '../hooks/useInitialStateEpisode'
import useInitialStateIds from '../hooks/useInitialStateIds'

export const EpisodeInfo = () => {
  const {id} = useParams()
  const {data,loading} = useInitialStateEpisode(id);

  // const data = results.find(episode => episode.id === parseInt(id))
  // const { name,air_date,episode,characters } = data;
  const { fullIds } = data
  console.log(fullIds);
  const character_data = useInitialStateIds(fullIds);
  
  return (
    <div className="container">
      {/* <h1 className="display-4">{name}</h1> */}
      <hr/>
      { loading && <h1 className="animate__animated animate__flash">Loading..</h1> }
      <div>
        {
          
        }
      </div>
    </div>
  )
}
