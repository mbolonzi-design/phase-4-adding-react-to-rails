import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then((movies) => console.log(movies));
  }, []);
  return (
    <div>
      <h1>Hello from React!</h1>
    </div>
  );
}

export default App;
