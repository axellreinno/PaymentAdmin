import $ from '@/axios'

export default {
  getListProvinsi(token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      $.get('/getListProvinsi/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getListKabKota(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getListKabKota/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getListKecamatan(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getListKecamatan/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getListKelurahan(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getListKelurahan/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  getKodePos(param, token) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        params: param
      }
      $.get('/getKodePos/', config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
}
