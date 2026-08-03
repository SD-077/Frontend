export async function getPokemons(setPokemons) {
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
        const data = await res.json();
        setPokemons(data.results);
    } catch(err) {
        console.log(err)
    }
};
export async function getPokemonByName(setPokemon, pokemonName, controller) {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {signal: controller.signal});
        const data = await res.json();
        setPokemon(data);
    } catch(err) {
        if(err.name !== "AbortError") throw err;
    }
};