<template>
  <div class="app app-auth flex-row align-items-center">
    <div class="full-container">
      <div class="panel panel-auth">
        <div class="animated fadeIn">
          <div class="panel-header">
            <img src="../../../assets/img/logo/logo.png" />
          </div>
          <div class="panel-body animated fadeIn">
            <h5 class="panel-title">Sign In Verify</h5>
            <form class="panel-form" ref="form" @submit.prevent>
              <div class="form-group">
                <label class="form-control-label">Activation Code</label>
                <input
                  type="tel"
                  class="form-control form-control-auth"
                  placeholder="Activation Code"
                  :maxlength="6"
                  :minlength="6"
                  required
                />
                <i class="pre-icon primary text-size-20 fas fa-fingerprint"></i>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-end align-items-center">
                  <button type="submit" class="btn btn-primary" @click="submitForm()">
                    <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="panel-footer text-center">
            <a style="cursor: pointer;" class="primary">Resend Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SignInVerify",
  methods: {
    submitForm() {
      this.$router.push("/");
    },
  },
};
</script>