import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32800459-f497cc305ed72b583c0cab75b';

export const fetchPhotos = async ({ query, page }) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

fetchPhotos.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

