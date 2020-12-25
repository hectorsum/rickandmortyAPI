import React from 'react'
import Card from './Card';
import useInitialStateCharacter from '../hooks/useInitialStateCharacter';

const Character = () =>{
  const { data } = useInitialStateCharacter();
  return (
    <div className="container">
      <div className="grid-character row d-flex justify-content-center mt-4 mb-4">
        {
          data.map( item => <Card key={item.id} {...item} /> )
        }
      </div>
    </div>
  )
}

export default Character;