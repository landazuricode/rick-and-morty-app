import React, { useState } from 'react';

const Card = props => {
  const [showPop, setShowPop] = useState(false);

  const handleClick = () => {
    if (showPop) {
      setShowPop(false);
    } else {
      setShowPop(true);
    }
  };

  return (
    <div className='card' data-id={props.id}>
      <img src={props.image || 'https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading...'}
        onClick={handleClick}
        alt={props.name}
        data-id={props.id} />

      {showPop &&
        <div className='popup'>
          <article className='popup-content'>
            <i className="popup-close" onClick={handleClick}>X</i>
            <div className='popup-a'>
              <img src={props.image || 'https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading...'}
                alt={props.name} />
            </div>
            <div className='popup-b'>
              <h2>{props.name}</h2>

              <div className='popup-details'>
                <span>Genero: </span><span>{props.gender}</span>
              </div>
              <div className='popup-details'>
                <span>Especies: </span><span>{props.species}</span>
              </div>
              <div className='popup-details'>
                <span>Estado: </span><span>{props.status}</span>
              </div>
              <div className='popup-details'>
                <span>Origen: </span><span>{props.origin ? props.origin.name : '-'}</span>
              </div>
              <div className='popup-details'>
                <span>Ubicación: </span><span>{props.location ? props.location.name : '-'}</span>
              </div>

            </div>
          </article>
        </div>
      }
    </div>
  );
};

export default Card;
