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
                <li class="breadcrumb-item">Riwayat Transaksi</li>
              </ol>
              <h1 class="app-body-head-title">Riwayat Transaksi</h1>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-tabs>
          <b-tab title="Summary" class="px-0" active>
            <b-row>
              <b-col md="3">
                <div class="card card-dashboard-counting">
                  <div class="card-body">
                    <h1 class="card-title">187</h1>
                    <label class="card-subtitle primary">Today Transaction</label>
                    <span class="card-text">The total number of today transaction.</span>
                  </div>
                </div>
              </b-col>
              <b-col md="3">
                <div class="card card-dashboard-counting">
                  <div class="card-body">
                    <h1 class="card-title">187</h1>
                    <label class="card-subtitle primary">Monthly Transaction</label>
                    <span class="card-text">The total number of monthly transaction.</span>
                  </div>
                </div>
              </b-col>
              <b-col md="3">
                <div class="card card-dashboard-counting">
                  <div class="card-body">
                    <h1 class="card-title">187</h1>
                    <label class="card-subtitle primary">Yearly Transaction</label>
                    <span class="card-text">The total number of yearly transaction.</span>
                  </div>
                </div>
              </b-col>
              <b-col md="3">
                <div class="card card-dashboard-counting">
                  <div class="card-body">
                    <h1 class="card-title">187</h1>
                    <label class="card-subtitle primary">Total Transaction</label>
                    <span class="card-text">The total number of total transaction.</span>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <div class="section">
          <div class="card card-header-info">
            <div class="card-body">
              <div>
                <table class="table table-riwayat table-hover-animated">
                  <thead>
                    <tr>
                      <th>Transaksi</th>
                      <th class="text-right">Total</th>
                      <th class="text-right">Saldo</th>
                      <th>Tanggal</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div>
                            <img src="/img/menu/keuangan.svg" class="icon" />
                          </div>
                          <div>
                            <a
                              href="javascript:void(0)"
                              class="text-medium"
                            >Pembelian Pulsa Telkomsel 5K</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <span class="price">5.000,-</span>
                      </td>
                      <td class="text-right">
                        <span class="price">100.000,-</span>
                      </td>
                      <td>
                        <span class="date">10-10-2019</span>
                      </td>
                      <td>
                        <span
                          class="label label-md label-gd-success"
                        >Sukses</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div>
                            <img src="/img/menu/keuangan.svg" class="icon" />
                          </div>
                          <div>
                            <a
                              href="javascript:void(0)"
                              class="text-medium"
                            >Pembelian Pulsa Telkomsel 5K</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <span class="price">5.000,-</span>
                      </td>
                      <td class="text-right">
                        <span class="price">100.000,-</span>
                      </td>
                      <td>
                        <span class="date">10-10-2019</span>
                      </td>
                      <td>
                        <span
                          class="label label-md label-gd-success"
                        >Sukses</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div>
                            <img src="/img/menu/keuangan.svg" class="icon" />
                          </div>
                          <div>
                            <a
                              href="javascript:void(0)"
                              class="text-medium"
                            >Pembelian Pulsa Telkomsel 5K</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <span class="price">5.000,-</span>
                      </td>
                      <td class="text-right">
                        <span class="price">100.000,-</span>
                      </td>
                      <td>
                        <span class="date">10-10-2019</span>
                      </td>
                      <td>
                        <span
                          class="label label-md label-gd-success"
                        >Sukses</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div>
                            <img src="/img/menu/keuangan.svg" class="icon" />
                          </div>
                          <div>
                            <a
                              href="javascript:void(0)"
                              class="text-medium"
                            >Pembelian Pulsa Telkomsel 5K</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <span class="price">5.000,-</span>
                      </td>
                      <td class="text-right">
                        <span class="price">100.000,-</span>
                      </td>
                      <td>
                        <span class="date">10-10-2019</span>
                      </td>
                      <td>
                        <span
                          class="label label-md label-gd-success"
                        >Sukses</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <div>
                            <img src="/img/menu/keuangan.svg" class="icon" />
                          </div>
                          <div>
                            <a
                              href="javascript:void(0)"
                              class="text-medium"
                            >Pembelian Pulsa Telkomsel 5K</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <span class="price">5.000,-</span>
                      </td>
                      <td class="text-right">
                        <span class="price">100.000,-</span>
                      </td>
                      <td>
                        <span class="date">10-10-2019</span>
                      </td>
                      <td>
                        <span
                          class="label label-md label-gd-success"
                        >Sukses</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="card-block pt-0 text-right"
                >
                  <el-pagination
                    :page-sizes="[10, 20, 30, 50, 75, 100, 200, 300, 400, 500]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100"
                  ></el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TransactionHistory"
};
</script>
