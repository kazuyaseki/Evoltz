<template>
  <div class="container">
    <Header/>
    <nuxt/>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
.container {
  background-color: #fafafa;
  height: 100%;
  overflow: hidden;
}
</style>