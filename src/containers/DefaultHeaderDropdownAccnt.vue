<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img src="../assets/img/avatar/1.jpg" class="header-img">
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="bg-primary text-center p-3">
        <h5
          class="dropdown-header-title text-size-16 text-semibold"
        ></h5>
      </b-dropdown-header>
      <div class="p-2">
        <b-dropdown-item>
          <i class="fa fa-user"/> Profile
        </b-dropdown-item>
        <b-dropdown-item>
          <i class="fa fa-wrench"/> Settings
        </b-dropdown-item>
        <b-dropdown-divider/>
        <b-dropdown-item>
          <i class="fa fa-lock"/> Logout
        </b-dropdown-item>
      </div>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from "@coreui/vue";

export default {
  name: "DefaultHeaderDropdownAccnt",
  components: {
    AppHeaderDropdown,
  }
};
</script>