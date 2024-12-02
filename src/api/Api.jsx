import React from 'react'
import UserPost from './endpoints/Userpost'
import TokenPost from './endpoints/tokenPost'
import PhotoPost from './endpoints/photoPost'
import PhotoGet from './endpoints/PhotoGet'

function Api() {
  return (
    <div>
    <h2>User post</h2>
    <UserPost />
    <h2>Token Post</h2>
    <TokenPost />
    <h2>PHOTOPOST</h2>
    <PhotoPost />
    <h2>PhotoGet</h2>
    <PhotoGet /> 

    </div>
    
  )
}

export default Api