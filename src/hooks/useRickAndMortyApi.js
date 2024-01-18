import { useState, useEffect } from 'react';
import axios from 'axios';

const useRickAndMortyApi = (initialUrl, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return { data, loading, error, fetchData };
};

export default useRickAndMortyApi;
