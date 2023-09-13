import { Chat, Filters, Header, PostsList } from '../../components/index'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='app__homepage'>
        <Header/>
        <main className='app__homepage-main'>
          <Filters/>
          <section className='app__homepage-main-posts'>
            <PostsList />
          </section>
          <Chat/>
        </main>
    </div>
  )
}

export default HomePage