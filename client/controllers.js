import pokemonData from './data/pokemon.json'

export const minifyPokemon = (pokemon) => {
    return {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        height: pokemon.height,
        weight: pokemon.weight,
        experience: pokemon.base_experience,
        type: pokemon.types[0].type.name,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        specialAttack: pokemon.stats[3].base_stat,
        specialDefense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        specialAbility: pokemon.abilities[0].ability.name
    }
}

export const PokemonLowerCase = () => {
    const namesArr = Object.keys(pokemonData)
    const lowerCase = namesArr.map(name => name.toLowerCase())
    return lowerCase
}