import React from 'react'

const Comment = (props) => {

  return (
    <div className='comment-container'>          
     <h1>{props.title}</h1>  
     <p>{props.comment}</p>
    </div>
  )
  }

export default Comment
  