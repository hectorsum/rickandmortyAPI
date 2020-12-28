import React from 'react'
import { useParams } from 'react-router-dom'
import useInitialStateEpisode from '../hooks/useInitialStateEpisode'
import useInitialStateIds from '../hooks/useInitialStateIds'
import Card from './Card'

export const EpisodeInfo = () => {
  const {id} = useParams()
  const {data,loading} = useInitialStateEpisode(id);
  const { name,air_date,episode,fullIds } = data
  const {data:fullData,loading:loading_ids} = useInitialStateIds(fullIds);
  console.log();
  return (
    <div className="d-flex row">
      <div className="d-flex flex-column col-md-6 text-center justify-content-start mt-5 animate__animated animate__zoomIn">
        { (loading || loading_ids) && <h1 className="animate__animated animate__flash">Loading..</h1> }
        <h1 className="display-4">{name}</h1>
        <h4 className="text-muted">{air_date}</h4>
        <h4 className="text-muted">{episode}</h4>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-4 mb-4 col-md-6 animate__animated animate__jackInTheBox">
        <h4 className="text-center">Characters involved</h4>
        <hr/>
        {
          fullData.map( item => <Card key={item.id} {...item} /> )
        }
      </div>
    </div>
  )
}
