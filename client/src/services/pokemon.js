import axios from "axios";

export const getRandom = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1000"
    );
    const pokemonList = response.data.results;
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];
    return randomPokemon;
  } catch (error) {
    console.error("Failed to fetch random Pokemon name:", error);
    throw new Error("Failed to fetch random Pokemon name");
  }
};

export const getGif = async (randomPokemon) => {
  try {
    const pokemon = await getRandom(randomPokemon);
    const pokemonData = await axios.get(pokemon.url);
    const pokemonImg = pokemonData.data.sprites.front_default;
    return pokemonImg;
  } catch (error) {
    console.error("Failed to fetch GIF URL:", error);
    throw new Error("Failed to fetch GIF URL");
  }
};
