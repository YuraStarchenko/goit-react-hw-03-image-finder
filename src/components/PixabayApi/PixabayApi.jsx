import axios from 'axios';

axios.defaults.ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';

export const fetchImage = async (page, query) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
