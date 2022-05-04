import React from 'react'

import { Fire, Normal, Bug, Dark, Flying, Poison, Ghost, Dragon, Psychic, Rock, Grass, Electric, Fairy, Ground, Steel, Water, Ice, Fighting } from '../Styled'

const Types = (props) => {

  return (
    <>
       {(() => {
        switch (props.type) {
          case 'fire':
            return <Fire><p>{props.type}</p></Fire>
          case 'normal':
            return <Normal><p>{props.type}</p></Normal>
          case 'bug':
            return <Bug><p>{props.type}</p></Bug>
          case 'dark':
            return <Dark><p>{props.type}</p></Dark>
          case 'flying':
            return <Flying><p>{props.type}</p></Flying>
          case 'poison':
            return <Poison><p>{props.type}</p></Poison>
          case 'ghost':
            return <Ghost><p>{props.type}</p></Ghost>
          case 'dragon':
            return <Dragon><p>{props.type}</p></Dragon>
          case 'psychic':
            return <Psychic><p>{props.type}</p></Psychic>
          case 'rock':
            return <Rock><p>{props.type}</p></Rock>
          case 'grass':
            return <Grass><p>{props.type}</p></Grass>
          case 'electric':
            return <Electric><p>{props.type}</p></Electric>
          case 'fairy':
            return <Fairy><p>{props.type}</p></Fairy>
          case 'ground':
            return <Ground><p>{props.type}</p></Ground>
          case 'steel':
            return <Steel><p>{props.type}</p></Steel>
          case 'water':
            return <Water><p>{props.type}</p></Water>
          case 'ice':
            return <Ice><p>{props.type}</p></Ice>
          case 'fighting':
            return <Fighting><p>{props.type}</p></Fighting>

          default:
            return null
        }
      })()}
      </>
  )
  }

export default Types
  