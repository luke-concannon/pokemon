import React from 'react'

import Types from '../pokemon/Types'

const CardBack = (props) => {

  return (
    <div className ='pokemon-card'>
      <div className='top-details'>
        {props.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className='image-section-text'>
        <h4>Pokédex:</h4><h3>{props.id}</h3>
        <h4>hp:</h4><h3>{props.hp}</h3>
        </div>
      </div>
      
        <div className='card-img'>
          <img src={props.image} />
        </div>
        <div className='card-title'>
          <h2>{props.name}</h2>
          </div>
        <div className='card-details'>
        <div className='card-details-top'>
            <span className='test'><h4>Attack</h4><h3>{props.attack}</h3></span>
            <span className='test'><h4>Defence</h4><h3>{props.defense}</h3></span>
            <span className='test'><h4>Sp Attack</h4><h3>{props.specialAttack}</h3></span>
            <span className='test'><h4>Sp Defence</h4><h3>{props.specialDefense}</h3></span>
        </div>
        <div className='card-details-middle'>
            <span className='test'><h4>Height</h4><h3>{props.height}ft</h3></span>
            <span className='test'><h4>Weight</h4><h3>{props.weight}lbs</h3></span>
            <span className='test'><h4>Speed</h4><h3>{props.speed}mph</h3></span>
            <span className='test'><h4>Experience</h4><h3>{props.experience}yrs</h3></span>
        </div>
        <div className='types'>
          {props.type.map(type => <Types key={props.id} type={type}/>)}
          </div>
          </div> 
          <div className='trainer-details'>
           <h4>Trainer:</h4><h3>Rātā Marley</h3>
          </div>
      </div>
  )
  }

export default CardBack
  