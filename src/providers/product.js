import $ from '@/axios'

export default {
  getProductById(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getProductById/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getListProductsByTag(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getListProductsByTag/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
}
