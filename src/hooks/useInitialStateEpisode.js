import {useState,useEffect} from 'react';
import {getEpisode} from '../helpers/getEpisode';

const useInitialStateEpisode = (id) =>{
  const [state, setState] = useState({
    data:[],
    loading:true})
  
  useEffect(()=>{
    getEpisode(id)
    .then(data => {
      setState({data,
                loading:false})
    })
  },[id]);
  return state;
};

export default useInitialStateEpisode;