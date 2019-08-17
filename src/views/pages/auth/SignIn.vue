<template>
  <div class="app app-auth flex-row align-items-center">
    <div class="full-container">
      <div class="panel panel-auth">
        <div class="animated fadeIn">
          <div class="panel-header">
            <img src="../../../assets/img/logo/logo.png">
          </div>
          <div class="panel-body">
            <h5 class="panel-title">Sign In</h5>
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
                >
                <i class="pre-icon primary text-size-20 fas fa-phone"></i>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-end align-items-center">
                  <button type="submit" class="btn btn-primary" @click="submitForm()">
                    <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="panel-footer text-center">
            Don't have an account ?
            <router-link to="/auth/signup">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    submitForm() {
      this.$router.push("/auth/signin-verify");
    }
  },
};
</script>