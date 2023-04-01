import axios from 'axios';
const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33854415-dab75466e51d96ca7439b60b4';

export function getImage(searchImage) {
	fetch(`${ENDPOINT}/q=${searchImage}`);
}
