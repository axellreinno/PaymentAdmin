<template>
  <li :class="classList">
      <button type="button" :class="btnClassList">{{name}}</button>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    btnClasses: {
      type: String,
      default: ''
    },
  },
  computed: {
    classList () {
      return [
        'nav-button',
        ...this.itemClasses
      ]
    },
    itemClasses () {
      return this.classes ? this.classes.split(' ') : ''
    },
    btnClassList(){
      return [
        'btn',
        ...this.itemBtnClasses
      ]
    },
    itemBtnClasses () {
      return this.btnClasses ? this.btnClasses.split(' ') : ''
    },
  }
}
</script>
