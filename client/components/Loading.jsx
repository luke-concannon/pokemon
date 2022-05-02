import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
  const isLoading = useSelector((state) => state.loading)

  return isLoading ? (
    <div className='loading'> 
    <img className="loading-gif" src="/images/animated-circle.gif" />
    <h4>Fetching Pokemon!</h4>
    </div> 
  ) : null
}

export default Loading