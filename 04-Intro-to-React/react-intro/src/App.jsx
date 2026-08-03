import StudentCard from './components/StudentCard';
import UserFormular from './components/UserFormular';
import UserObjFormular from './components/UserObjFormular';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import { getPokemons, getPokemonByName } from './server/pokeAPI';
import SearchPokemon from './components/SearchPokemon';

function App() {
  const [user, setUser] = useState({ name: 'Maria', age: 44, hobbies: ['singing', 'reading'] });
  const [displayUser, setDisplayUser] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState({});

  // useEffect(() => {
  //   console.log("Hello")
  // })

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(pokemon)
    }, 2000)

    return () => clearInterval(myInterval)
  }, [])

  useEffect(() => {
    getPokemons(setPokemons);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (search) {
      getPokemonByName(setPokemon, search, controller);
    }

    return () => controller.abort()
  }, [search]);

  console.log(pokemon);

  const handleClick = () => {
    setDisplayUser((prev) => !prev);
  };

  return (
    <div className='h-screen flex flex-col place-items-center place-content-center'>
      <Button
        onClick={handleClick}
        text={displayUser ? 'Display ON' : 'Display OFF'}
        type='button'
        style={displayUser ? 'btn-primary' : ''}
      />

      <SearchPokemon setSearch={setSearch} />

      {/* <UserObjFormular setUser={setUser} />
      {displayUser ? <StudentCard student={user} setUser={setUser} /> : <p>Person not found</p>}
      
      {pokemons.length > 0 && pokemons.map((p) => <li key={p.name}>{p.name}</li>)} */}
    </div>
  );
}

export default App;
