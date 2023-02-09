import axios from 'axios';

// element is item, //widget is the file coming from
export default function handleInteractions(body) {
  return axios.post('/interactions', body)
    .then((res) => console.log('this is the res', res))
    .catch((err) => console.log('this is the err', err));
}
