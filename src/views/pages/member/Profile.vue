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
                <li class="breadcrumb-item">Profile</li>
              </ol>
              <h1 class="app-body-head-title">Profile</h1>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <div class="section">
          <div class="card card-profile">
            <div class="card-header">
              <span
                class="label label-md label-gd-warning text-size-12 px-3 text-uppercase"
              >{{parseTextLevelMember()}}</span>
              <div class="card-wrapper">
                <img src="../../../assets/img/avatar/1.jpg" class="card-img">
                <h5 class="card-title">{{parseNamaMember(userProfile)}}</h5>
                <span class="card-text">{{userProfile.email}}</span>
              </div>
              <svg
                class="decor"
                width="842px"
                height="219px"
                viewBox="0 0 842 219"
                preserveAspectRatio="xMaxYMax meet"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g transform="translate(-381.000000, -362.000000)" fill="#FFFFFF">
                  <path
                    class="decor-path"
                    d="M1223,362 L1223,581 L381,581 C868.912802,575.666667 1149.57947,502.666667 1223,362 Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="card-body">
              <ul class="profile-list my-2">
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Username.</label>
                    <span>{{userProfile.username}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>No HP.</label>
                    <span>{{userProfile.phoneNumber}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Provinsi.</label>
                    <span class="text-right">{{userProfile.address?userProfile.address.province:"-"}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Kota/Kab.</label>
                    <span class="text-right">{{userProfile.address?userProfile.address.city:"-"}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Kecamatan.</label>
                    <span class="text-right">{{userProfile.address?userProfile.address.subDistric:"-"}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Kelurahan.</label>
                    <span class="text-right">{{userProfile.address?userProfile.address.village:"-"}}</span>
                  </div>
                </li>
                <li class="profile-list-item">
                  <div class="d-flex justify-content-between">
                    <label>Kode Pos.</label>
                    <span class="text-right">{{userProfile.address?userProfile.address.postalCode:"-"}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="8">
        <div class="card card-settings">
          <div class="card-body">
            <b-tabs justified>
              <b-tab active>
                <template slot="title">
                  <b-media no-body>
                    <b-media-aside vertical-align="center">
                      <i class="tab-icon far fa-user" slot="aside" vertical-align="middle"></i>
                    </b-media-aside>
                    <b-media-body class="ml-3">
                      <h5 class="tab-title">Profile Settings</h5>
                      <span
                        class="tab-text"
                      >Bagian ini mendefinisikan tentang pengaturan untuk profile anda.</span>
                    </b-media-body>
                  </b-media>
                </template>
                <div>
                  <el-form
                    ref="formProfile"
                    :model="formProfile"
                    label-position="top"
                    @submit.prevent.native
                  >
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Nama Depan"
                          prop="firstname"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-input
                            placeholder="Masukkan Nama Depan"
                            v-model="formProfile.firstname"
                          ></el-input>
                        </el-form-item>
                      </b-col>
                      <b-col md="6">
                        <el-form-item
                          label="Nama Belakang"
                          prop="lastname"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-input
                            placeholder="Masukkan Nama Belakang"
                            v-model="formProfile.lastname"
                          ></el-input>
                        </el-form-item>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Tempat Lahir"
                          prop="birthPlace"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-input
                            placeholder="Masukkan Tempat Lahir"
                            v-model="formProfile.birthPlace"
                          ></el-input>
                        </el-form-item>
                      </b-col>
                      <b-col md="6">
                        <el-form-item
                          label="Tanggal Lahir"
                          prop="birthTime"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-date-picker
                            v-model="formProfile.birthTime"
                            type="date"
                            placeholder="Masukkan Tanggal Lahir"
                          ></el-date-picker>
                        </el-form-item>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Provinsi"
                          prop="prov"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-select
                            v-model="formProfile.prov"
                            filterable
                            placeholder="Pilih Provinsi"
                            :loading="provinsi.process"
                            @change="changeProvinsi"
                          >
                            <el-option
                              v-for="item in provinsi.data"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                      <b-col md="6">
                        <el-form-item
                          label="Kab/Kota"
                          prop="kabkota"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-select
                            v-model="formProfile.kabkota"
                            filterable
                            placeholder="Pilih Kabupaten/Kota"
                            :loading="kabkota.process"
                            @change="changeKabKota"
                          >
                            <el-option
                              v-for="item in kabkota.data"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Kecamatan"
                          prop="kec"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-select
                            v-model="formProfile.kec"
                            filterable
                            placeholder="Pilih Kecamatan"
                            :loading="kecamatan.process"
                            @change="changeKecamatan"
                          >
                            <el-option
                              v-for="item in kecamatan.data"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                      <b-col md="6">
                        <el-form-item
                          label="Kelurahan"
                          prop="kel"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-select
                            v-model="formProfile.kel"
                            filterable
                            placeholder="Pilih Kelurahan"
                            :loading="kelurahan.process"
                            @change="changeKelurahan"
                          >
                            <el-option
                              v-for="item in kelurahan.data"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6">
                        <el-form-item
                          label="Kode Pos"
                          prop="kodePos"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-input
                            placeholder="Masukkan Kode Pos"
                            v-model="formProfile.kodePos"
                            :disabled="true"
                          ></el-input>
                        </el-form-item>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <el-form-item
                          label="Alamat"
                          prop="homeAddr"
                          :rules="[{
      required: true, 
      message: 'Field tidak boleh kosong!', 
      trigger: 'blur'
    }]"
                        >
                          <el-input placeholder="Masukkan Alamat" v-model="formProfile.homeAddr"></el-input>
                        </el-form-item>
                      </b-col>
                    </b-row>

                    <el-form-item class="text-right mb-0">
                      <button
                        type="button"
                        class="btn btn-animate btn-animate-side btn-primary"
                        @click="submitFormProfile('formProfile')"
                      >
                        <span>
                          <i class="icon fas fa-check-circle" aria-hidden="true"></i>Simpan
                        </span>
                      </button>
                    </el-form-item>
                  </el-form>
                </div>
              </b-tab>

              <b-tab>
                <template slot="title">
                  <b-media no-body>
                    <b-media-aside vertical-align="center">
                      <i class="tab-icon fas fa-print" slot="aside" vertical-align="middle"></i>
                    </b-media-aside>
                    <b-media-body class="ml-3">
                      <h5 class="tab-title">Print Settings</h5>
                      <span
                        class="tab-text"
                      >Bagian ini mendefinisikan tentang pengaturan untuk cetak.</span>
                    </b-media-body>
                  </b-media>
                </template>
                <div></div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "Profile",
};
</script>
