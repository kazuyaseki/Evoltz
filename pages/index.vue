<template>
  <main>
    <div class="projects">
      <ul>
        <li :key="project.id" v-for="project of projects">
          <span class="project-icon" :style="{ backgroundColor: project.color }"></span>
          {{ project.name }}
        </li>
      </ul>
    </div>
    <div class="todos">
      <ul>
        <li :key="todo" v-for="todo in todos">{{ todo }}</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  components: {}
})
export default class extends Vue {
  todos: string[] = ["買い物", "洗濯", "掃除"];
  projects: { id: string; name: string; color: string }[] = [
    { id: "hoge", name: "仕事", color: "red" },
    { id: "hogee", name: "生産性向上", color: "blue" },
    { id: "hogeee", name: "家事", color: "yellow" }
  ];
}
</script>
<style lang="scss" scoped>
.todos {
  li {
    background-color: red;
  }
}
</style>
