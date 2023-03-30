import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';

  async fetchHits() {
    const URL = `${ENDPOINT}?key=${KEY}&q=${this.searchQuery}&per_page=${this.per_page}&page=${this.page}`;

    const { data } = await axios.get(URL);
    return data;
}