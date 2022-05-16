import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()

  return (
    <div className ='detail-container'>
      <h1> Welcome to {id}&apos;s page!</h1>
    </div>
  )
  }

export default Detail
  