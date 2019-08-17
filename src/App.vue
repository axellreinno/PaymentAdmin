<template>
  <div>
    <!-- <div class="loading-bg">
      <img src="/img/loading.gif">
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="scss">
// CoreUI Icons Set
@import "~@coreui/icons/css/coreui-icons.min.css";
/* Import Font Awesome Icons Set */
@import "~@fortawesome/fontawesome-free/css/all.css";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
/* Import element UI Styles */
@import "~element-ui/lib/theme-chalk/index.css";
// Import Font styles for this application
@import "assets/fonts/index";
// Import Main styles for this application
@import "assets/scss/index";
</style>

<style lang="scss" scoped>
.loading-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background: #fff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  overflow: hidden;
  img {
    width: 150px;
  }
}
</style>
