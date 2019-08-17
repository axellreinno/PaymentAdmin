import $ from '@/axios'

export default {
  postTopUpBank(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/postTopUpBank/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  postTransferMember(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/transferMember/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  checkPaymentPlnPrepaid(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/checkPaymentPlnPrepaid/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  checkPaymentPlnPostpaid(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/checkPaymentPlnPostpaid/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  checkPaymentBPJS(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/checkPaymentBPJS/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  checkPaymentTelkom(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/checkPaymentTelkom/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  checkTSELHalo(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/checkTSELHalo/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  postByUrl(url, param, token){
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post(url, param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  }
}
