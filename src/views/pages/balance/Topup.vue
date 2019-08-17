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
                <li class="breadcrumb-item">
                  <router-link to="/saldo">Saldo</router-link>
                </li>
                <li class="breadcrumb-item">Isi Saldo</li>
              </ol>
              <h1 class="app-body-head-title">Isi Saldo</h1>
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
              <b-tabs>
                <b-tab title="Transfer Bank" class="px-0" active>
                  <el-form ref="formTransfer" label-position="top">
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Pilih Bank"
                        >
                          <el-select
                            placeholder="Pilih Bank"
                            value=""
                            filterable
                            clearable
                          >
                            <el-option
                              v-for="item in bankList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                              <span style="float: left">{{ item.label }}</span>
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                      <b-col md="6">
                        <el-form-item
                          label="Pilih Nominal"
                        >
                          <el-select
                            placeholder="Pilih Nominal"
                            value=""
                            filterable
                            clearable
                          >
                            <el-option
                              v-for="item in optionNominal"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                              <span style="float: left">{{ item.label }}</span>
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                    </b-row>

                    <el-form-item class="text-right">
                      <button
                        type="button"
                        class="btn btn-animate btn-animate-side btn-primary mr-1"
                      >
                        <span>
                          <i class="icon fas fa-check-circle" aria-hidden="true"></i>Lanjutkan
                        </span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-animate btn-animate-side btn-pure-danger"
                      >
                        <span>
                          <i class="icon fas fa-times-circle mr-1" aria-hidden="true"></i>Reset
                        </span>
                      </button>
                    </el-form-item>
                  </el-form>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="4">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Panduan Isi Saldo</h5>
          </div>
          <div class="card-body" style="color: #7987a1">
            <ul class="pl-3">
              <li>Pilih metode pembayaran, melalui Transfer Bank atau Member.</li>
              <li>
                Apabila melalui Transfer Bank
                <ol>
                  <li>Pilih Bank Pengirim</li>
                  <li>Pilih jumlah uang yang akan di Transfer</li>
                  <li>Periksa kembali data</li>
                  <li>Setelah itu tekan ISI SALDO.</li>
                </ol>
              </li>
              <li>Apabila melalui Member silahkan ikuti sesuai intruksi yang tertera.</li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "Topup",
  data() {
    return {
      bankList: [
        {label: "BCA", value:"BCA"},
        {label: "BNI", value:"BNI"},
        {label: "BRI", value:"BRI"},
      ],
      optionNominal: [
        {label: "1000", value:"1000"},
        {label: "5000", value:"5000"},
        {label: "20000", value:"20000"},
      ],
    }
  }
};
</script>
