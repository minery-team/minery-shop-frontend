import axios from 'axios';
import { interceptAuthToken } from './interceptAuthToken';

export const requester = axios.create({
  baseURL: 'https://r0up0kec01.execute-api.ap-northeast-2.amazonaws.com/live',
});

requester.interceptors.request.use(interceptAuthToken);
