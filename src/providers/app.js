import $ from '@/axios'

export default {
  getWebId(param) {
    return new Promise((resolve, reject) => {
      $.get('/getWebId/', {
          params: param
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  }
}
