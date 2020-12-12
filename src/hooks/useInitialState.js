import {useState,useEffect} from 'react';

const useInitialState = (API) =>{
  const [character, setCharacter] = useState({results:[]})
  useEffect(()=>{
    fetch(API)
    .then(resp => resp.json())
    .then(data => setCharacter(data))
  }, []);
  return character;
};

export default useInitialState;