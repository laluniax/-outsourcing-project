import axios from 'axios';

const CommentInstance = axios.create({
  baseURL: process.env.REACT_APP_COMMENT_URL
});

CommentInstance.interceptors.request.use(
  () => {},
  () => {}
);

CommentInstance.interceptors.response.use(
  () => {},

  () => {}
);
