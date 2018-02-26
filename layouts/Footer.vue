<template>
  <footer>
    <div @click="setShowTimer(true)">タイマー予定地</div>
    <div v-if="showTimer">タイマー</div>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  showTimer: boolean = false;

  setShowTimer(newMode: boolean) {
    this.showTimer = newMode;
  }
}
</script>
<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid #666;
  background-color: #000;
  color: #fff;
  padding: 8px 10px;
  box-sizing: border-box;

  z-index: 1px;
}
</style>