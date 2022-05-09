import React from 'react'

const CardBack = (props) => {

  const poke = props.pokemon

  return (
    <div className='pokemon-card'>
      <div className='top-details'>
        {poke.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className='image-section-text'>
        <h4>Pokédex:</h4><h3>{poke.id}</h3>
        <h4>hp:</h4><h3>{poke.hp}</h3>
        </div>
      </div>
        <div className='card-img'>
          <img src={poke.image} />
        </div>
        <div className='card-title'>
          <h2>{poke.name}</h2>
          </div>
        <div className='card-details'>
        <div className='backcard-details-top'>
          {poke.specialAbilities.map(ability => <span key={ability.url} className='test'><h4>Special Ability</h4><h3>{ability.ability}</h3></span>)}
        </div>
        <div className='backcard-details-middle'>
          <span className='test'><h4>Shape</h4><h3>{poke.shape}</h3></span>
          <span className='test'><h4>Colour</h4><h3>{poke.colour}</h3></span>
          <span className='test'><h4>Habitat</h4><h3>{poke.habitat}</h3></span>
        </div>
          </div> 
          <div className='trainer-details'>
            <h4>Trainer:</h4><h3>Rātā Marley</h3>
          </div>
      </div>
  )
  }

export default CardBack