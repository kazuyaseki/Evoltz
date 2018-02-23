<template>
  <div class="container">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {
    Header,
    Footer
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