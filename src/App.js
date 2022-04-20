import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  useEffect(() => {
  const callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/');
    const body = await response.json();
    console.log(body)
  };  
  callBackendAPI()
}, [])

  return (
    <div>
      Ibonsai
    </div>
  );
}

export default App;
