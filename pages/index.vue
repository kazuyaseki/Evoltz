<template>
  <div class="flex">
    <ul class="todos">
      <li :key="todo" v-for="todo in todos">{{ todo }}</li>
    </ul> 
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  components: {}
})
export default class extends Vue {
  todos: string[] = ["買い物", "洗濯", "掃除"];
}
</script>
<style lang="scss" scoped>
.todos {
  li {
    background-color: red;
  }
}
</style>
