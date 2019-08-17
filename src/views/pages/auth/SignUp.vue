<template>
  <div class="app app-auth flex-row align-items-center">
    <div class="full-container">
      <div class="panel panel-auth" v-loading="stateProses">
        <div class="animated fadeIn">
          <div class="panel-header">
            <img src="../../../assets/img/logo/logo.png" />
          </div>
          <div class="panel-body animated fadeIn">
            <h5 class="panel-title">Sign Up</h5>

            <form class="panel-form" ref="form" @submit.prevent>
              <div class="form-group">
                <label class="form-control-label">Phone Number</label>
                <input
                  type="tel"
                  class="form-control form-control-auth"
                  placeholder="Ex. 081234567890"
                  :maxlength="13"
                  :minlength="8"
                  required
                />
                <i class="pre-icon primary text-size-20 fas fa-phone"></i>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-end align-items-center">
                  <button type="submit" class="btn btn-primary" @click="submitForm()">
                    <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="panel-footer text-center">
            <div>
              Have an account ?
              <router-link to="/auth/signin">Sign In</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    submitForm() {
      this.$router.push("/auth/signup-verify");
    }
  },
};
</script>