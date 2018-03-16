<template>
  <div>
    <h3>{{projectName}}</h3>
    <ul>
      <li :key="todo" v-for="todo in doneTodos">{{todo}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ["projectName"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>

</style>
