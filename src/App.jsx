import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [heroes, setHeroes] = useState([]);

  //! useEffect triggers AFTER the component has FINISHED rendering
  useEffect(() => {
    // axiosHeroes();

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(serverRes => {
        console.log(serverRes.data);
        setHeroes(serverRes.data);
      })
      .catch(err => console.log(err));
      
  }, []);

  // Fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((data) => {
        // console.log(data);
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        setHeroes(parsedData);
      })
      .catch(err => console.error("❌❌❌❌", err));
  };

  // Axios
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(serverRes => {
        console.log(serverRes.data);
        setHeroes(serverRes.data);
      })
      .catch(err => console.log(err));
  };


  return (
    <>
      <h1>SuperHeroes API 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <hr />
      {/* {JSON.stringify(heroes)} */}

      <button onClick={() => fetchHeroes()}>Fetch superheroes</button> |
      <button onClick={axiosHeroes}>axios superheroes</button>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} width="80px" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              );
            })
          }


        </tbody>
      </table>
    </>
  );
}

export default App;
