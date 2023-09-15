import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const createSession = async (email: string, password: string) => {
  return api.post('/api/v1/auth/login', { email, password });
};

export const verifySession = async (token: string) => {
  const authorizationToken = `Token ${token}`;
  const config = {
    headers: {
      Authorization: authorizationToken,
    },
  };
  return api.get('/api/v1/auth/token', config);
};

export const getPosts = async () => {
  return api.get('/api/v1/posts');
};

export const updateVotes = async (newVotes: number, id: number) => {
  return api.patch(`/api/v1/posts/${id}`, { votes: newVotes });
};
