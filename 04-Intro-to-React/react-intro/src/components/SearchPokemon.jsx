import {useState} from "react";

function SearchPokemon({setSearch}) {
    const [pokemonName, setPokemonName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!pokemonName) return alert("Insert a pokemon name")
        setSearch(pokemonName);
        setPokemonName("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input className="m-1 input" onChange={(e) => setPokemonName(e.target.value.toLowerCase())} value={pokemonName} type="text" name="pokemon" id="pokemon" />
        <button className="btn" type="submit">Search</button>
    </form>
  )
}

export default SearchPokemon