import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const apiData = createContext();

const ContextAPI = ({ children }) => {
  const [apiInfo, setApiInfo] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => setApiInfo(res.data.products))
      .catch((error) => console.error("API Fetch Error: ", error));
  }, []);

  return (
    <apiData.Provider value={apiInfo}>
      {children}
    </apiData.Provider>
  );
};

export { apiData, ContextAPI };
