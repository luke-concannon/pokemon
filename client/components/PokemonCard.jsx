import React, { useState, useEffect } from 'react'

const PokeCard = (props) => {

  return (
    <div className ='pokemon-card'>
      <div className='top-details'>
        <h3>HP: {props.hp}</h3>
        <div className='id-habitat'>
          <p>Pokedex: {props.id}</p>
          <p>Habitat: {props.habitat}</p>
        </div>
        <div className='height-weight'>
          <p>Height: {props.height}ft</p>
          <p>Weight: {props.weight}lbs</p>
        </div>
      </div>
        <div className='card-img'>
          <img src={props.image} />
        </div>
        <div className='card-title'>
          <h2>{props.name}</h2>
          </div>
        
        <p>Colour: {props.colour}</p>
        <p>Habitat: {props.habitat}</p>
      </div>
  )
  }

export default PokeCard
  