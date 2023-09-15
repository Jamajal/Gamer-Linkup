import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './PostsList.scss';
import { getPosts } from '../../services/api';

interface PostProps {
  id: number;
  title: string;
  description: string;
  votes: number;
  invited_players: number;
  created_at: Date;
  category: any;
  author: any;
}

const PostsList = () => {
  const [posts, setPosts] = useState<Array<PostProps> | null>();

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await getPosts();
      if (response) setPosts(response.data);
    };

    getAllPosts();
    console.log(posts);
  }, []);

  return (
    <section className="app__postslist">
      <div className="app__postslist-title">
        <h2>WANNA PLAY SOMETHING?</h2>
        <button>LET'S</button>
      </div>
      <h2>PEOPLE ARE LOOKING FOR BUDDIES TO PLAY</h2>
      <div>
        {posts?.map((post) => {
          return (
            <Post
              id={post.id}
              title={post.title}
              description={post.description}
              votes={post.votes}
              invited_players={post.invited_players}
              categories={post.category}
              author={post.author.username}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PostsList;
