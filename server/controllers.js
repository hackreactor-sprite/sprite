const { default: axios } = require('axios');
const config = require('../config.js');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: `${config.TOKEN}`,
  },
};
module.exports = {
  getAll: (extension) => {
    console.log(extension, 'extension');
    return axios({
      method: 'get',
      url: options.url + extension,
      headers: options.headers,
    });
  },
  // create: () => {

  // },
  // PUT : () => {

  // }
};
