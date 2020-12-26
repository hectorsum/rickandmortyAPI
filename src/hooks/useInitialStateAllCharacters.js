import {useState,useEffect} from 'react';
import {getAllCharacters} from '../helpers/getAllCharacters';

const useInitialState = () =>{
  const [state, setState] = useState({
    data:[],
    loading:true})
  
  useEffect(()=>{
    getAllCharacters()
    .then(data => {
      setState({data,
                loading:false})
    })
  },[]);
  return state;
};

export default useInitialState;