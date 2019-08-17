<template>
  <div class="sidebar-wallet">
    <div
      class="wallet-box popup-hover popup-animated popup-hover-dark d-flex justify-content-between"
    >
      <i class="icon fas fa-wallet"></i>
      <h5 class="title">100000</h5>

      <div class="popup-menu">
        <div class="popup-bg">
          <i class="fas fa-wallet"></i>
        </div>
        <div class="popup-header">
          <i class="icon fas fa-wallet"></i>
          <h5 class="title">100000</h5>
        </div>
        <div class="popup-body">
          <ul class="popup-nav animated">
            <li class="popup-item">
              <router-link to="/saldo/isi-saldo" class="popup-link">
                <i class="popup-icon fas fa-plus-circle"></i>
                <span>Topup Saldo</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarWallet",
};
</script>
