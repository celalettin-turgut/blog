import axios from 'axios';

export const api = () =>
  axios.create({ baseURL: 'https://react-yazi-yorum.herokuapp.com/' });
