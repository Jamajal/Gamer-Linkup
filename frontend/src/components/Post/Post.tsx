import './Post.scss'
import gameImage from '../../assets/game-img.png'

const Post = () => {
  return (
    <div className='app__post'>
      <figure>
        <img src={gameImage}/>
        <figcaption>LEAGUE OF LEGENDS</figcaption>
        <div className='app__post-imgshadow'></div>
      </figure>
      <div className='app__post-content'>
        <p>
          Lore IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE
          Lore IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE 
          Lore IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE 
          Lore IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE 
          Lore IPSUM LORE IPSUM 
        </p>

        <div>
          <div className='app__post-footer'>
            <input type='button'/><span>145</span>
            <input type='button'/><span>30</span>
            <input type='button'/><span>10</span>
            <input type='button'/><span>4 PLAYERS</span>
          </div>
          <span>nome do autor</span>
        </div>
      </div>
    </div>
  )
}

export default Post