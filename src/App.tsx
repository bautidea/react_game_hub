import { useEffect, useState } from 'react';
import { axiosInstance } from './services/axiosInstance';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/games')
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  a;

  return (
    <>
      <h1>HI</h1>
    </>
  );
}

export default App;
