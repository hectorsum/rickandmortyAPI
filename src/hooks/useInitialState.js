import {useState,useEffect} from 'react';
import {getEpisode} from '../helpers/getEpisode';

const useInitialState = (id) =>{
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

export default useInitialState;