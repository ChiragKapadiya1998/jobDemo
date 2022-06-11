import {API} from '../api/api';

export function getUserData() {
  return API.fetch({
    url: 'https://jsonplaceholder.typicode.com/users',
  }).then(async response => {
    console.log('apiResponse::', response);
    return response.data;
  });
}
