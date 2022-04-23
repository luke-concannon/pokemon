import pokemonArray from './data/pokemonArray'

export const minifyPokemon = (pokeType, pokeSpecies) => {
    return {
        // From Type api
        id: pokeType.id,
        name: pokeType.name.charAt(0).toUpperCase() + pokeType.name.slice(1),
        height: pokeType.height,
        weight: pokeType.weight,
        experience: pokeType.base_experience,
        type: pokeType.types.map(type => type.type.name),
        hp: pokeType.stats[0].base_stat,
        attack: pokeType.stats[1].base_stat,
        defense: pokeType.stats[2].base_stat,
        specialAttack: pokeType.stats[3].base_stat,
        specialDefense: pokeType.stats[4].base_stat,
        speed: pokeType.stats[5].base_stat,
        moves: pokeType.moves,
        specialAbility: pokeType.abilities[0].ability.name,
        // From evolution api
        evolutionURL: pokeSpecies.evolution_chain.url,
        happiness: pokeSpecies.base_happiness,
        colour: pokeSpecies.color.name,
        habitat: pokeSpecies.habitat.name,
        shape: pokeSpecies.shape.name
    }
}

export const pokemonLowerCase = () => {
    const namesArr = pokemonArray.forEach(pokemon => pokemon.name)
    const lowerCase = namesArr.map(name => name.toLowerCase())
    return lowerCase
}