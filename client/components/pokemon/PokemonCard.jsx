import React from 'react'
import { Link } from 'react-router-dom'

import Types from '../pokemon/Types'

const PokeCard = (props) => {
  const poke = props.pokemon

  return (
    <div style={{border:props.colour}} className="pokemon-card">
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
        <div className='card-details-top'>
            <span className='test'><h4>Attack</h4><h3>{poke.attack}</h3></span>
            <span className='test'><h4>Defence</h4><h3>{poke.defense}</h3></span>
            <span className='test'><h4>Sp Attack</h4><h3>{poke.specialAttack}</h3></span>
            <span className='test'><h4>Sp Defence</h4><h3>{poke.specialDefense}</h3></span>
        </div>
        <div className='card-details-middle'>
            <span className='test'><h4>Height</h4><h3>{poke.height}ft</h3></span>
            <span className='test'><h4>Weight</h4><h3>{poke.weight}lbs</h3></span>
            <span className='test'><h4>Speed</h4><h3>{poke.speed}mph</h3></span>
            <span className='test'><h4>Experience</h4><h3>{poke.experience}yrs</h3></span>
        </div>
        <div className='types'>
          {poke.type.map(type => <Types key={type} type={type}/>)}
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

export default PokeCard
  