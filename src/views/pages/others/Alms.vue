<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12">
        <div class="app-body-head">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item">Sedekah</li>
              </ol>
              <h1 class="app-body-head-title">Sedekah</h1>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8">
        <div class="section">
          <div class="card card-pd-lg">
            <div class="card-body">
              <el-alert
                title="Isikan data pada form yang tersedia di bawah ini, pastikan data yang diisi benar."
                type="info"
                show-icon
              ></el-alert>
              <el-form ref="form" :model="form" label-position="top">
                <b-row>
                  <b-col md="4">
                    <el-form-item label="Nomor Tujuan">
                      <el-input placeholder="Masukkan Nomor Tujuan" v-model="form.no_hp" clearable disabled></el-input>
                    </el-form-item>
                  </b-col>
                  <b-col md="4">
                    <el-form-item label="Atas Nama">
                      <el-input placeholder="Masukkan Atas Nama" v-model="form.atas_nama" clearable disabled></el-input>
                    </el-form-item>
                  </b-col>
                  <b-col md="4">
                    <el-form-item label="Nominal Dana">
                      <el-input placeholder="Masukkan Nominal Dana" v-model="form.nominal" clearable></el-input>
                    </el-form-item>
                  </b-col>
                  <b-col md="12">
                    <el-form-item label="Catatan">
                      <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="Masukkan Catatan"
                        v-model="form.catatan"
                      ></el-input>
                    </el-form-item>
                  </b-col>
                </b-row>
                <el-form-item class="text-right">
                  <button type="submit" class="btn btn-animate btn-animate-side btn-primary mr-1">
                    <span>
                      <i class="icon fas fa-check-circle" aria-hidden="true"></i>Lanjutkan
                    </span>
                  </button>
                  <button type="submit" class="btn btn-animate btn-animate-side btn-pure-danger">
                    <span>
                      <i class="icon fas fa-times-circle mr-1" aria-hidden="true"></i>Reset
                    </span>
                  </button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Alms",
  components: {},
  data() {
    return {
      form: {
        no_hp: "",
        atas_nama: "",
        nominal: "",
        catatan: ""
      }
    };
  }
};
</script>
