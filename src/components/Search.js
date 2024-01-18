import React from 'react';

const Search = (props) => {
  let sendValue = (e) => {
    props.getInputValue(e.target.value);
  };

  const handleSubmit = () => {
    props.getSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.sendEnter();
    }
  };

  return (
    <div className='search'>
      <div className='search-box'>
        <input type='text' onChange={sendValue} onKeyDown={handleKeyDown} placeholder='Ingresa una palabra...' />
        <button onClick={handleSubmit} ></button>
      </div>
    </div>
  );
};

export default Search;
