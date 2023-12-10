import axios from 'axios';
// 디테일 페이지의 댓글
const COMMENT_URL = process.env.REACT_APP_COMMENT_URL;

const getComments = async () => {
  const response = await axios.get(`${COMMENT_URL}/comments`);
  console.log('response:', response.data);
  return response.data;
};

const addComments = async (newComment) => {
  await axios.post(`${COMMENT_URL}/comments`, newComment);
};

const updateComments = async (newComment) => {
  alert('맞아 ?이게 ???');
  await axios.patch(`${COMMENT_URL}/comments`, newComment);
};

const deleteComments = async () => {
  await axios.delete(`${COMMENT_URL}/comments`);
};
export { getComments, addComments, updateComments, deleteComments };
