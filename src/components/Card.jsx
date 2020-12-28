import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) =>{
  const {id,name,image} = props;
  return(
    <div className="card col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2 p-0">
      <img src={image} className="card-img-top" alt={name}/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <Link to={`/characters/${id}`}>
          More...
        </Link>
      </div>
    </div>
  );
}


export default Card;