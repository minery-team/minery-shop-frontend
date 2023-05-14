import axios from 'axios';

export const requester = axios.create({
  // TODO: 서버 구성 완료 후, axios 설정 완성
  baseURL: 'https://ud1d8doyu8.execute-api.ap-northeast-2.amazonaws.com/live',
});
