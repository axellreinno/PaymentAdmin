<template>
  <div class="app app-auth flex-row align-items-center">
    <div class="full-container">
      <div class="panel panel-auth">
        <div class="panel-header">
          <img src="../../../assets/img/logo/logo.png">
        </div>
        <div class="panel-body">
          <h5 class="panel-title">Aktivasi Akun</h5>
          <form class="panel-form">
            <div class="form-group">
              <label class="form-control-label">Kode Aktivasi</label>
              <input
                type="password"
                class="form-control form-control-auth"
                placeholder="******"
                required
              >
              <i class="pre-icon primary text-size-20 fas fa-fingerprint"></i>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-between align-items-center">
                <a href="#">Aktivasi dalam 30:00</a>
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="panel-footer text-center">
          <router-link to="/auth/login">Sudah memiliki akun ?</router-link> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activation",
  mounted() {
      
  }
};
</script>