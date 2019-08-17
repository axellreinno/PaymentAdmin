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
                  <router-link to="/beli">Beli</router-link>
                </li>
                <li class="breadcrumb-item">Pulsa</li>
              </ol>
              <h1 class="app-body-head-title">Pulsa</h1>
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
              <el-form ref="form" :model="form" label-position="top" @submit.prevent.native>
                <el-form-item label="Nomor Pelanggan">
                  <el-input
                    placeholder="Ex. 0123456789"
                    minlength="8"
                    maxlength="13"
                    clearable
                    show-word-limit
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="list-produk-beli">
                <div class="text-center">
                  <h5 class="list-title-header">List Pulsa</h5>
                </div>

                <div class="list-content">
                  <div class="list-item">
                    <a href="javascript:void(0)" class="list-link">
                      <div class="list-wrapper">
                        <div class="list-left">
                          <img src="/img/providers/TELKOMSEL.png" class="list-icon" />
                        </div>
                        <div class="list-center">
                          <h5 class="list-title">Telkomsel 5K</h5>
                          <span class="list-subtitle">Telkomsel senilai 5000 rupiah</span>
                        </div>
                        <div class="list-right text-right">
                          <span class="list-price-second" v-b-tooltip.show title="Silver">6000</span>
                          <span class="list-price-second" v-b-tooltip.show title="Gold">5500</span>
                          <span class="list-price" v-b-tooltip.show title="Platinum">5000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="list-item">
                    <a href="javascript:void(0)" class="list-link">
                      <div class="list-wrapper">
                        <div class="list-left">
                          <img src="/img/providers/TELKOMSEL.png" class="list-icon" />
                        </div>
                        <div class="list-center">
                          <h5 class="list-title">Telkomsel 5K</h5>
                          <span class="list-subtitle">Telkomsel senilai 5000 rupiah</span>
                        </div>
                        <div class="list-right text-right">
                          <span class="list-price-second" v-b-tooltip.show title="Silver">6000</span>
                          <span class="list-price-second" v-b-tooltip.show title="Gold">5500</span>
                          <span class="list-price" v-b-tooltip.show title="Platinum">5000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="list-item">
                    <a href="javascript:void(0)" class="list-link">
                      <div class="list-wrapper">
                        <div class="list-left">
                          <img src="/img/providers/TELKOMSEL.png" class="list-icon" />
                        </div>
                        <div class="list-center">
                          <h5 class="list-title">Telkomsel 5K</h5>
                          <span class="list-subtitle">Telkomsel senilai 5000 rupiah</span>
                        </div>
                        <div class="list-right text-right">
                          <span class="list-price-second" v-b-tooltip.show title="Silver">6000</span>
                          <span class="list-price-second" v-b-tooltip.show title="Gold">5500</span>
                          <span class="list-price" v-b-tooltip.show title="Platinum">5000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="list-item">
                    <a href="javascript:void(0)" class="list-link">
                      <div class="list-wrapper">
                        <div class="list-left">
                          <img src="/img/providers/TELKOMSEL.png" class="list-icon" />
                        </div>
                        <div class="list-center">
                          <h5 class="list-title">Telkomsel 5K</h5>
                          <span class="list-subtitle">Telkomsel senilai 5000 rupiah</span>
                        </div>
                        <div class="list-right text-right">
                          <span class="list-price-second" v-b-tooltip.show title="Silver">6000</span>
                          <span class="list-price-second" v-b-tooltip.show title="Gold">5500</span>
                          <span class="list-price" v-b-tooltip.show title="Platinum">5000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="list-item">
                    <a href="javascript:void(0)" class="list-link">
                      <div class="list-wrapper">
                        <div class="list-left">
                          <img src="/img/providers/TELKOMSEL.png" class="list-icon" />
                        </div>
                        <div class="list-center">
                          <h5 class="list-title">Telkomsel 5K</h5>
                          <span class="list-subtitle">Telkomsel senilai 5000 rupiah</span>
                        </div>
                        <div class="list-right text-right">
                          <span class="list-price-second" v-b-tooltip.show title="Silver">6000</span>
                          <span class="list-price-second" v-b-tooltip.show title="Gold">5500</span>
                          <span class="list-price" v-b-tooltip.show title="Platinum">5000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="4">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Panduan Beli Pulsa</h5>
          </div>
          <div class="card-body" style="color: #7987a1">
            <ol class="pl-3">
              <li>Masukkan Nomor Hp yang akan diisi pulsa.</li>
              <li>Pilih berapa nominal pulsa yang akan dikirim.</li>
              <li>Jika semua informasi sudah benar tekan tombol beli.</li>
            </ol>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Pulsa",
  data() {
    return {
      form: {
        reff: ""
      },
      iconProvider: "",
      product: []
    };
  }
};
</script>
