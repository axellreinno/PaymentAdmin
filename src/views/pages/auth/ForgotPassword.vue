<template>
  <div class="app app-auth flex-row align-items-center">
    <div class="full-container">
      <div class="panel panel-auth">
        <div class="panel-header">
          <img src="../../../assets/img/logo/logo.png">
        </div>
        <div class="panel-body">
          <h5 class="panel-title">Lupa Password</h5>
          <form class="panel-form">
            <div class="form-group">
              <label class="form-control-label">No HP</label>
              <input
                type="text"
                class="form-control form-control-auth"
                placeholder="Ex. 081234567890"
                required
              >
              <i class="pre-icon primary text-size-20 fas fa-phone"></i>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-end align-items-center">
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="panel-footer text-center">
          Belum memiliki akun ?
          <router-link to="/auth/daftar">Daftar Sekarang</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword"
};
</script>