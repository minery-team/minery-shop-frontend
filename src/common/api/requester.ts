import axios from 'axios';

export const requester = axios.create({
  baseURL: 'https://ud1d8doyu8.execute-api.ap-northeast-2.amazonaws.com/live',
});
