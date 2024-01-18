import React from 'react';

const Loader = props => {
  return (
    <div className='loader'>
      Cargando...
      <i className="fas fa-sync-alt fa-spin"></i>
    </div>
  );
};

export default Loader;
