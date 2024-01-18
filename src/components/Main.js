import React, { useState } from 'react';
import useRickAndMortyApi from '../hooks/useRickAndMortyApi';
import Card from './Card';
import Search from './Search';
import Loader from './Loader';

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [word, setWord] = useState('a');
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${encodeURIComponent(word)}`;
  
    const { data, loading, error, fetchData } = useRickAndMortyApi(apiUrl, []);
  
    const handleNext = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    const handleBack = () => {
      setCurrentPage(prevPage => prevPage - 1);
    };
  
    const storeInputValue = (value) => {
      setWord(value);
    };
  
    const handleSearch = () => {
      const newApiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${encodeURIComponent(word)}`;
      fetchData(newApiUrl);
    };
  
    const genCards = () => {
      return data.results.map((card, index) => <Card {...card} key={index} />);
    };
  
    return (
      <div className='main'>
        <div className='head'>
          <img src='https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e' />
        </div>
        <Search
          getInputValue={storeInputValue}
          getSubmit={handleSearch}
          sendEnter={handleSearch}
        />
  
        <div className='cards'>
          {loading ? <Loader /> :
            (data.results.length === 0 ? <div className='error'>Nadie encontrado...</div> : genCards())}
        </div>
  
        <div className='btns'>
          {currentPage === 1 ? null : <button className='btn back' onClick={handleBack}>Atras</button>}
          {data.info && currentPage === data.info.pages ? null : <button className='btn next' onClick={handleNext}>Siguiente </button>}
        </div>
      </div>
    );
  };
  
  export default Main;
  
