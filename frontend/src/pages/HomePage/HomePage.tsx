import React from 'react'
import { Chat, Filters, Header, PostsList } from '../../components'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Filters/>
        <PostsList/>
        <Chat/>
    </div>
  )
}

export default HomePage