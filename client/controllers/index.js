import { getPokemonApi, getSpeciesApi } from '../api'

export const getBlurb = (allBlurbs) => {
    const blurb = allBlurbs.find(blurb => blurb.language.name === 'en')
    return blurb.flavor_text
}

export const minifyPokemon = (pokeType, pokeSpecies) => {
    try {
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
        specialAbilities: pokeType.abilities.map(elem => (
            {
              ability: elem.ability.name,
              url: elem.ability.url
            }
        )),
        // From evolution api
        evolutionURL: pokeSpecies.evolution_chain?.url,
        evolvesFrom: pokeSpecies.evolves_from_species,
        happiness: pokeSpecies.base_happiness,
        colour: pokeSpecies.color?.name,
        habitat: pokeSpecies.habitat === null ? 'Unknown' : pokeSpecies.habitat.name,
        shape: pokeSpecies.shape?.name === undefined ? 'Unspecified' : pokeSpecies.shape.name,
        blurb: getBlurb(pokeSpecies.flavor_text_entries)
    }
    } catch (err) {
        console.error('Minify Not Working!')
    }
}

 const getPokeImage = (pokemon) => {
    if (pokemon === 'Nidoran♀') {
        return `https://img.pokemondb.net/artwork/large/nidoran-f.jpg`
    } else if (pokemon === 'Nidoran♂') {
        return `https://img.pokemondb.net/artwork/large/nidoran-m.jpg`
    } else {
        return `https://img.pokemondb.net/artwork/large/${pokemon.toLowerCase()}.jpg`
    }
 }

// LOOP through selection array and make API calls to get data for each pokemon selected
export const getPokemonAsync = async (selectionArr) => {
  const pokemons = []

  for (let i = 0; i < selectionArr.length; i++) {

          const pokemonAttributes = await getPokemonApi(selectionArr[i].toLowerCase())
        //   console.log(pokemonAttributes)

 
          const pokeEvolution = await getSpeciesApi(selectionArr[i].toLowerCase())
          console.log(pokeEvolution)


          const pokeFromApi = minifyPokemon(pokemonAttributes, pokeEvolution)
          console.log(pokeFromApi)


          const image = getPokeImage(pokemonAttributes.name)
          console.log(image)


          const pokemon = {...pokeFromApi, image}
          console.log(pokemon)


          pokemons.push(pokemon)
          console.log(pokemons)
        }
        console.log(pokemons)
        return pokemons
}