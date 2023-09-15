import { useState } from 'react';
import './Post.scss';
import gameImage from '../../assets/game-img.png';
import upVote from '../../assets/upvote-icon.svg';
import downVote from '../../assets/downvote-icon.svg';
import commentIcon from '../../assets/comment-icon.svg';
import playerIcon from '../../assets/players-icon.svg';
import { updateVotes } from '../../services/api';

interface PostProps {
  id: number;
  title: string;
  description: string;
  votes: number;
  invited_players: number;
  categories: any;
  author: any;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  votes,
  invited_players,
  categories,
  author,
}) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  return (
    <div className="app__post">
      <figure>
        <img src={gameImage} />
        <figcaption>{title}</figcaption>
        <div className="app__post-imgshadow"></div>
      </figure>
      <div className="app__post-content">
        <p>{description} </p>

        <div className="app__post-footer">
          <div className="app__post-footer-buttons">
            <div>
              <button
                onClick={() => {
                  setCurrentVotes((prev) => prev + 1);
                  updateVotes(currentVotes + 1, id);
                }}
              >
                <img src={upVote} />
              </button>
              <span>{currentVotes}</span>
              <button
                onClick={() => {
                  setCurrentVotes((prev) => prev - 1);
                  updateVotes(currentVotes - 1, id);
                }}
              >
                <img src={downVote} />
              </button>
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
              <span>{invited_players} PLAYERS</span>
            </div>
          </div>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
