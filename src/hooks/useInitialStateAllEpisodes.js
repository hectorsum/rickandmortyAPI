import {useState,useEffect} from 'react';
import {getFullEpisodes} from '../helpers/getFullEpisodes';

const useInitialStateAllEpisodes = () =>{
  const [state, setState] = useState({
    data:[],
    loading:true})
  
  useEffect(()=>{
    getFullEpisodes()
    .then(data => {
      setState({data,
                loading:false})
    })
  },[]);
  return state;
};

export default useInitialStateAllEpisodes;