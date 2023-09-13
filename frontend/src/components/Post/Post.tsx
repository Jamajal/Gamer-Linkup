import './Post.scss'
import gameImage from '../../assets/game-img.png'
import upVote from '../../assets/upvote-icon.svg'
import downVote from '../../assets/downvote-icon.svg'
import commentIcon from '../../assets/comment-icon.svg'
import playerIcon from '../../assets/players-icon.svg'

const Post = () => {
  return (
    <div className="app__post">
      <figure>
        <img src={gameImage} />
        <figcaption>LEAGUE OF LEGENDS</figcaption>
        <div className="app__post-imgshadow"></div>
      </figure>
      <div className="app__post-content">
        <p>
          Lore IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE Lore
          IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE Lore
          IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE Lore
          IPSUM LORE IPSUM IPSUM LORE Lore IPSUM LORE IPSUM IPSUM LORE Lore
          IPSUM LORE IPSUM
        </p>

        <div className='app__post-footer'>
          <div className='app__post-footer-buttons'>
            <div>
              <button>
                <img src={upVote} />
              </button>
              <span>145</span>
            </div>

            <div>
              <button>
                <img src={downVote} />
              </button>
              <span>30</span>
            </div>

            <div>
              <button>
                <img src={commentIcon} />
              </button>
              <span>10</span>
            </div>
            
            <div>
              <button>
                <img src={playerIcon} />
              </button>
              <span>4 PLAYERS</span>
            </div>
          </div>
            <p>nome do autor</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
