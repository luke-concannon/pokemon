import React, { useState, useEffect } from 'react'
import PokeCard from './PokemonCard'
import CardBack from './CardBack'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardBorder, setCardBorder] = useState('solid 5px #47A8BD')

  const handleClick = () => {
  setIsFlipped(!isFlipped)
  }

  const cardColourFunc = () => {
    switch (props.pokemon.colour) {
          case 'red':
            setCardBorder('solid 5px #AB1E23')
            break
          case 'blue':
            setCardBorder('solid 5px #1452E2')
            break
          case 'yellow':
            setCardBorder('solid 5px #E3E32A')
            break
          case 'green':
            setCardBorder('solid 5px #147B3E')
            break
          case 'black':
            setCardBorder('solid 5px #BBBBBB')
            break
          case 'brown':
            setCardBorder('solid 5px #994022')
            break
          case 'purple':
            setCardBorder('solid 5px #5E2E87')
            break
          case 'gray':
            setCardBorder('solid 5px #D1D1E0')
            break
          case 'white':
            setCardBorder('solid 5px #fefefe')
            break
          case 'pink':
            setCardBorder('solid 5px #A72B6E')
           break
          default:
            return
        }
      }

  useEffect(() => {
    cardColourFunc()
  }, [])

  return (
    <div>
        {!isFlipped
          ? <PokeCard pokemon={props.pokemon} flip={handleClick} colour={cardBorder} />
          : <CardBack pokemon={props.pokemon} flip={handleClick} colour={cardBorder} />
          }
    </div>
  )
  }

export default Card
  