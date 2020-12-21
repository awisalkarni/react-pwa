import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch("http://orangevalleycaa.org/api/videos").then(
        response => response.json()
      )
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) {
    return 
    <div>
      <header>
        <h1>Videos</h1>
        <div>Loading</div>
      </header>
    </div>
  }
  
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      {data.map(video => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <video height={200} controls src={video.video_url}/>
          </div>
        ))}
    </div>
  );
}

export default App;
