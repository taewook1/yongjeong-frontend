import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api', // 개발에선 프록시로 연결되고, 운영에선 도메인 내 라우트로 연결됨
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;