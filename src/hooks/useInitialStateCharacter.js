import {useState,useEffect} from 'react';
import {getCharacter} from '../helpers/getCharacter';

const useInitialState = () =>{
  const [state, setState] = useState({
    data:[],
    loading:true})
  
  useEffect(()=>{
    getCharacter()
    .then(data => {
      setState({data,
                loading:false})
    })
  },[]);
  return state;
};

export default useInitialState;