import { Chat, Filters, Header, PostsList } from '../../components'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='app__homepage'>
        <Header/>
        <main className='app__homepage-main'>
          <Filters/>
          <PostsList/>
          <Chat/>
        </main>
    </div>
  )
}

export default HomePage