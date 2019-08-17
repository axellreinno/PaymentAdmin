<template>
  <div class="app app-error flex-row align-items-center">
    <div class="full-container">
      <div class="text-center animated fadeIn">
        <div class="error-code primary">
          <i class="fas fa-times-circle"></i> 404
        </div>
        <h1 class="error-title">Oops.. You just found an error page..</h1>
        <h2 class="error-subtitle">We are sorry but your request is not found..</h2>
        <router-link to="/"
          class="btn btn-animate btn-animate-side-right btn-primary btn-lg"
        >
          <span>
            <i class="icon fas fa-arrow-right mr-1" aria-hidden="true"></i> Back to home
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>