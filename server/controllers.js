const axios = require('axios');
const config = require('../config');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: `${config.TOKEN}`,
    'User-Agent': 'request',
  },
};
module.exports = {
  getAll: (extension) => axios({
    method: 'get',
    url: options.url + extension,
    headers: options.headers,
  }),
  create: (extension, param) => axios({
    method: 'post',
    url: options.url + extension,
    headers: options.headers,
    data: param,
  }),
  update: (extension) => axios({
    method: 'put',
    url: options.url + extension,
    headers: options.headers,
  }),
};
