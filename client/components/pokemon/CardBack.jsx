import React from 'react'
import { Link } from 'react-router-dom'


const CardBack = (props) => {
  const poke = props.pokemon

  return (
    <div style={{border:props.colour}} className='pokemon-card'>
      <div className='top-details'>
        {poke.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className='image-section-text'>
        <h4>Pokédex:</h4><h3>{poke.id}</h3>
        <h4>hp:</h4><h3>{poke.hp}</h3>
        </div>
      </div>
        <div className='card-img'>
          <Link to={`/${poke.name.toLowerCase()}`}><img src={poke.image} /></Link>
        </div>
          <div className='card-title'>
          <h2><Link to={`/${poke.name.toLowerCase()}`}>{poke.name}</Link></h2>
          </div>
        <div className='card-details'>
        <div className='backcard-details-top'>
          <span className='special-ability'>
            <h4>Happiness</h4><h3>{poke.happiness}</h3>
            <h4>Special Abilities</h4>
            {poke.specialAbilities.map(ability => <h3 key={ability.url}>{ability.ability}</h3>)}
          </span>
          <span className='shape-colour-habitat'><h4>Shape</h4><h3>{poke.shape}</h3>
            <h4>Colour</h4><h3>{poke.colour}</h3>
            <h4>Habitat</h4><h3>{poke.habitat}</h3>
          </span>
        </div>
        <div className='backcard-details-middle'>
         
        </div>
          </div> 
          <div className='card-footer'>
          <div className='trainer-details'>
           <h4>Trainer:</h4><h3>Rātā Marley</h3>
           </div>
           <button onClick={props.flip} style={{cursor:"pointer"}}>&gt;&gt; Flip</button>
           </div>
      </div>
  )
  }

export default CardBack