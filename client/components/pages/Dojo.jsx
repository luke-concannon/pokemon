import React, { useEffect, useState } from 'react'
import { getComments } from '../../api'
import AddComment from './AddComment'
import Comment from './Comment'

const Dojo = () => {
  const [comments, setComments] = useState([])
  const [commentInput, setCommentInput] = useState(false)

   const loadCommentsAsync = async () => {
     const allComments = await getComments()
     setComments(allComments)
  }

   useEffect(() => {
    loadCommentsAsync()
  }, [comments])

  const handleClick = () => {
    setCommentInput(!commentInput)
  }

  return (
    <div className='dojo-container'>   
    <button onClick={handleClick}>Add Comment</button>
    {commentInput && <AddComment />}       
        {comments.slice(0).reverse().map((comment, index) => (<Comment key={index} {...comment} />))}     
    </div>
  )
  }

export default Dojo
  