import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(()=> {
    axios.get('/api/jokes')
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className="text-2xl text-center">This is a full stack app</h1>
      <p className="text-2xl text-center">Jokes: {jokes.length}</p>
      {jokes.map((joke, index)=> (
        <div key={joke.id || index} className="bg-teal-200 p-4 my-2 rounded">
          <h2 className="font-semibold">{joke.title}</h2>
          <p className="text-sm">{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App;
