<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div class="header-logo">
        <b-link class="navbar-brand" to="#">
          <img class="navbar-brand-full" src="/img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
          <img class="navbar-brand-minimized" src="/img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
        </b-link>
        <SidebarToggler class="d-md-down-none" display="lg" />
      </div>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <input placeholder="Start typing to search..." type="text" class="nav-search">
        </b-nav-item>
        <b-nav-item class="nav-history popup-hover popup-animated popup-hover popup-hover-right">
          <i class="nav-icon far fa-clock"></i>
          <div class="notify">
            <span class="heartbit"></span>
            <span class="point"></span>
          </div>
          <div class="popup-menu">
            <div class="popup-bg">
              <i class="far fa-clock"></i>
            </div>
            <div class="popup-header">
              <h5 class="popup-title">Riwayat Transaksi</h5>
            </div>
            <div class="popup-body">
              <ul class="popup-nav">
                <li class="popup-item">
                  <a href="javascript:void(0)" class="popup-link">
                    <div class="popup-wrapper">
                      <div class="popup-info">
                        <h5 class="popup-title">Pembelian Pulsa</h5>
                        <span class="popup-datetime">10-10-2019</span>
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="popup-price">Rp 10000</span>
                          <span class="label label-md label-gd-success">Sukses</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="popup-footer">
              <router-link to="/riwayat-transaksi">Lihat Semua</router-link>
            </div>
          </div>
        </b-nav-item>
        <b-nav-item class="nav-notification">
          <i class="nav-icon far fa-bell"></i>
          <div class="notify">
            <span class="heartbit"></span>
            <span class="point"></span>
          </div>
        </b-nav-item>
        <b-nav-item class="nav-profile popup-hover popup-animated popup-hover-dark popup-hover-right">
          <img src="../assets/img/avatar/1.jpg" class="header-img">
          <div class="popup-menu">
            <div class="popup-bg">
              <i class="far fa-credit-card"></i>
            </div>
            <div class="popup-header">
              <img src="../assets/img/avatar/1.jpg" class="popup-img">
              <div class="popup-info">
                <h5 class="popup-title">Axel Reinno</h5>
                <span class="popup-subtitle">081234567890</span>
              </div>
            </div>

            <div class="popup-body">
              <ul class="popup-nav animated">
                <li class="popup-item">
                  <router-link to="/profile" class="popup-link">
                    <i class="popup-icon far fa-user"></i>
                    <span>Akun Saya</span>
                  </router-link>
                </li>
                <li class="popup-item">
                  <a class="popup-link">
                    <i class="popup-icon fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b-nav-item>
      </b-navbar-nav>
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarProfile />
        <SidebarWallet />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <!-- <SidebarMinimizer/> -->
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list" /> -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import nav from "@/_nav";
  import {
    Header as AppHeader,
    SidebarToggler,
    Sidebar as AppSidebar,
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNav,
    Footer as TheFooter,
    Breadcrumb
  } from "@/components";

  import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";
  import SidebarProfile from "./SidebarProfile";
  import SidebarWallet from "./SidebarWallet";



  export default {
    name: "full",
    components: {
      AppHeader,
      AppSidebar,
      TheFooter,
      Breadcrumb,
      DefaultHeaderDropdownAccnt,
      SidebarForm,
      SidebarFooter,
      SidebarToggler,
      SidebarHeader,
      SidebarNav,
      SidebarMinimizer,
      SidebarProfile,
      SidebarWallet,
    },
    data() {
      return {
        nav: nav.items
      };
    },
    computed: {
      name() {
        return this.$route.name;
      },
      list() {
        return this.$route.matched.filter(
          route => route.name || route.meta.label
        );
      }
    },
  };
</script>