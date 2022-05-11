import React, { useState } from 'react'
import PokeCard from './PokemonCard'
import CardBack from './CardBack'

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

  return (
    <div>
        {!isFlipped
          ? <PokeCard pokemon={props.pokemon} flip={handleClick}/>
          : <CardBack pokemon={props.pokemon} flip={handleClick}/>
          }
    </div>
  )
  }

export default Card
  