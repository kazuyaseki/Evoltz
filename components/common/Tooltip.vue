<template>
  <div class="tooltip" :style="{ left: positions.x, top: positions.y }">
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: ["message", "positions"]
};
</script>
<style lang="scss" scoped>
.tooltip {
  position: absolute;
  color: #333;
  background-color: #fff;
  padding: 5px 8px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 80px;
  max-width: 200px;
  word-wrap: break-word;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
}
</style>
