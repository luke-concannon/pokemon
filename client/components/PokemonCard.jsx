import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const PokeCard = (props) => {

  return (
    <div className ='pokemon-card'>
      <div className='card-img'>
      {console.log(props)}
        <img src={props.image} />
      </div>
      <h2>{props.name}</h2>
      <p>HP: {props.hp}</p>
      <p>Colour: {props.colour}</p>
      <p>Habitat: {props.habitat}</p>
      <p>Weight: {props.weight}lbs</p>

    </div>
  )
  }

export default PokeCard
  