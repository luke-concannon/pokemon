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
        <div className='card-details-top'>

        </div>
        <div className='card-details-middle'>
        </div>
          </div> 
          <div className='trainer-details'>
          </div>
      </div>
  )
  }

export default CardBack
  