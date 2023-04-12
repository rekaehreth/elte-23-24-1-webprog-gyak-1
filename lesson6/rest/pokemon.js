const pokeApiBaseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemons = ["eevee", "pikachu", "charmander", "ditto", "jigglypuff"];

async function getPokemonDetails(pokemonName) {
    const response = await fetch(pokeApiBaseURL + pokemonName);
    return await response.json();
}

function getGoogleImageSearchLinkForPokemon(pokemonName) {
    return `https://www.google.com/search?tbm=isch&q=${pokemonName}`;
}

// in order to be able to use top level (i.e. not inside an async function) await, we have to use ES modules. In our script tag next to scr we also have to add type="module"
// await Promise.all(arrayOfPromises) - awaits all promises of arrayOfPromises
// pokemons.map(await getPokemonDetails) === pokemons.map(async pokemon => await getPokemonDetails(pokemon));
const pokemonDetails = await Promise.all(pokemons.map(await getPokemonDetails));


// Excercise for bonus points: display the following details in a table. Add a search for images with google link to every pokemon using the getGoogleImageSearchLinkForPokemon function
const detailsToDisplay = pokemonDetails.map(pokemonDetails => { 
    return {
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        order: pokemonDetails.order,
        weight: pokemonDetails.weight,
        height: pokemonDetails.height,
    }
});