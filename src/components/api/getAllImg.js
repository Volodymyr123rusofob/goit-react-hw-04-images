import axios from 'axios';
const KEY = '40816428-8ff543c0077c3bf6c3247c305';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: `${KEY}`,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImg = (q, page = 1) => {
  return instance.get('/', {
    params: {
      page: `${page}`,
      q: `${q}`,
    },
  });
};
