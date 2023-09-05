import Post from '../Post/Post'
import './PostsList.scss'

const PostsList = () => {

  return (
    <section className='app__postslist' >
      <div className='app__postslist-title'>
        <h2>WANNA PLAY SOMETHING?</h2>
        <button>LET'S</button>
      </div>
      <h2>PEOPLE ARE LOOKING FOR BUDDIES TO PLAY</h2>
      <div>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </section>
  )
}

export default PostsList