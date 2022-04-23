import React, { useState, useEffect } from 'react'

const PokeCard = (props) => {

  return (
    <div className ='pokemon-card'>
      <div className='card-img'>
        <img src={props.image} />
      </div>
      <h1>{props.name}</h1>
      <p>HP: {props.hp}</p>
      <p>Colour: {props.colour}</p>
      <p>Habitat: {props.habitat}</p>
      <p>Weight: {props.weight}lbs</p>

    </div>
  )
  }


export default PokeCard
  