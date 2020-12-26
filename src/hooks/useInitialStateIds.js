import {useState,useEffect} from 'react';
import {getCharacter} from '../helpers/getCharacter';

const useInitialStateIds = (id) =>{
  const [state, setState] = useState({
    data:[],
    loading:true})
  
  useEffect(()=>{
    getCharacter(id)
    .then(data => {
      setState({data,
                loading:false})
    })
  },[id]);
  return state;
};

export default useInitialStateIds;