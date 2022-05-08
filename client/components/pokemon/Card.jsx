import React, { useState } from 'react'
import PokeCard from './PokemonCard'
import CardBack from './CardBack'

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

  return (
    <div onClick={handleClick}>
        {!isFlipped
          ? <PokeCard pokemon={props.pokemon} />
          : <CardBack pokemon={props.pokemon} />
          }
    </div>
  )
  }

export default Card
  