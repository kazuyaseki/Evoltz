<template>
  <main>
    <ProjectSidebar />
    <TodoList :todos="$store.getters.selectedProject.todos" />
  </main>
</template>

<script lang="ts">
import ProjectSidebar from "../components/ProjectSidebar.vue";
import TodoList from "../components/TodoList.vue";

import { init } from "./shared";

export default {
  fetch: init,
  components: {
    ProjectSidebar,
    TodoList
  }
};
</script>
<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1080px;
  min-height: 100%;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  grid-template-areas: "g0 g1";
}
.todos {
  grid-area: g1;
  background-color: #fff;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
}
</style>
