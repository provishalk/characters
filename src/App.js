import { useEffect, useState } from "react";
import CharacterCard from "./Components/CharacterCard/CharacterCard";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);
  return (
    <div className="card-list">
      {characters.map((character) => (
        <CharacterCard character={character}/>
      ))}
    </div>
  );
}

export default App;
