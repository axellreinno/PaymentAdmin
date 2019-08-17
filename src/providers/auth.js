import $ from '@/axios'
import config from '@/config'

export default {
  signIn(param) {
    return new Promise((resolve, reject) => {
      $.post('/postLogin/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signInVerify(param) {
    return new Promise((resolve, reject) => {
      $.post('/postLoginVerify/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signInVerifyResend(param) {
    return new Promise((resolve, reject) => {
      $.post('/postLoginVerifyResend/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signUp(param) {
    return new Promise((resolve, reject) => {
      $.post('/postSignUp/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signUpVerify(param) {
    return new Promise((resolve, reject) => {
      $.post('/postSignUpverify/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signUpVerifyResend(param) {
    return new Promise((resolve, reject) => {
      $.post('/postSignUpVerifyResend/', param)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
  signUpProfileSetup(param, token) {
    return new Promise((resolve, reject) => {
      let headers = {
        headers: {'Authorization': 'Bearer '+token}
      }
      $.post('/postSignUpProfileSetup/', param, headers)
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
  },
}
