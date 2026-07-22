const baseUrl = 'https://pokeapi.co/api/v2/';
const form =  document.querySelector('#searchPokemon');
async function getPokemonByName(baseUrl,urlPath, pokemonName) {
    try {
        const response = await fetch(`${baseUrl}${urlPath}${pokemonName}`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error) {
        console.error(error)
    }
}



const getAllPokemon = async (baseUrl, urlPath) => {
  try {
    const res = await fetch(`${baseUrl}${urlPath}`);
    const data = await res.json();
    console.log(data);
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.error(err);
  }
};
const allPokemon = getAllPokemon(baseUrl, 'pokemon?limit=20&offset=0');

document.addEventListener("DOMContentLoaded", async() => {
    const allPokemon = await getAllPokemon(baseUrl, 'pokemon?limit=20&offset=0');
    console.log(allPokemon);
    const pokemon = await getPokemonByName(baseUrl, 'pokemon/', 'pikachu');
    console.log(pokemon);
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pokemonName = document.querySelector('#searchPokemon input').value.trim().toLowerCase();
    console.log(pokemonName);
    
    const pokemon = await getPokemonByName(baseUrl, 'pokemon/', pokemonName);
    console.log(pokemon);
})