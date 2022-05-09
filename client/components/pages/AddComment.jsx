import React, { useState } from 'react'

import { addComment } from '../../api'


const AddComment = () => {
    const [commentAdded, setCommentAdded] = useState(false)
    const [newComment, setNewComment] = useState({
        title: '',
        comment: ''
    })

  const submitHandler = (evt) => {
    evt.preventDefault()
    addComment(newComment)
    setCommentAdded(!commentAdded)
  }

  const changeHandler = (evt) => {
    setNewComment({
      ...newComment,
      [evt.target.id]: evt.target.value
    })
  }

  return (
      <>
      {commentAdded 
      ? <h1>Comment Added!</h1>
      : (
    <div className='add-comment-container'>   
    <form onSubmit={submitHandler}>
        <label>
          <input type='text' id='title' name='title' value={newComment.title} onChange={changeHandler} placeholder='title'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='comment' name='comment' value={newComment.comment} onChange={changeHandler} placeholder='comment'></input>
        </label>
        <input type="submit" value='Submit' />
      </form> 
    </div>
      )}
    </>
  )
  }

export default AddComment
  