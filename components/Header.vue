<template>
  <header>
    <nav>
      <span class="logo">Evoltz⚡️</span>
      <nuxt-link exact to="/" title="Todo">Todo</nuxt-link>
      <nuxt-link to="/reflection" title="振り返り">振り返り</nuxt-link>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: #89bdde;
  padding: 15px 25px;
}
.logo {
  display: inline;
  margin-right: 25px;
  color: #ffff33;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
}
a {
  color: #fefefe;
  text-decoration: none;
  margin-right: 15px;
}
a.nuxt-link-active {
  color: #fff;
  font-weight: bold;
}
</style>