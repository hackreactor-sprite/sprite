const { default: axios } = require('axios');
const config = require('../config.js');

module.exports = {
  getAll: () => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfp/products`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options).catch((err) => new Error(err));

    // return new Promise((resolve, reject) => {
    //   axios
    //     .get(productUrl, options.headers)
    //     .then((res) => {
    //       resolve(res.data);
    //     })
    //     .catch((err) => reject(err));
    // });
  },
  create: 'create',
};
