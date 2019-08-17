import $ from '@/axios'

export default {
  getBankList(token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.get('/getBankList/', headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
}
