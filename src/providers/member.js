import $ from '@/axios'

export default {
  getUserBalance(token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      $.get('/getUserBalance/', headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getUserProfile(token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      $.get('/getUserProfile/', headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getUserTransaction(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getListTransaction/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getUserTransactionDetail(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getTransactionDetail/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  postUserProfile(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/postUserProfile/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
}
