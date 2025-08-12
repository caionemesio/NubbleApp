import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mw.stSiqLAAk1EqYP90ftp5hcZXQjOUjfYhzFZj68kUd7SkASUfLoEm73K9S3hP',
  },
});
