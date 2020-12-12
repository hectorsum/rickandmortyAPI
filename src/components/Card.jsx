import React from 'react';

const Card = (props) =>{
  const {name,image} = props;
  return(
    <div className="card mt-5 p-2 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <img src={image} className="card-img-top" alt={name}/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <button type="button" href="#" className="btn btn-primary w-100 info-button">Info</button>
      </div>
    </div>
  );
}

export default Card;