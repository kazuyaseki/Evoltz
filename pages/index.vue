<template>
  <main>
    <ProjectSidebar :projects="projects" @addProject="addProject" />
    <TodoList :todos="selectedProject && selectedProject.todos || []" @addTodo="addTodo" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

import ProjectSidebar from "../components/ProjectSidebar.vue";
import TodoList from "../components/TodoList.vue";
import { database } from "../plugins/firebase";
import { Types } from "../interface/types";

@Component({
  components: {
    ProjectSidebar,
    TodoList
  }
})
export default class extends Vue {
  projects: Types.Project[] = [];
  selectedProject: Types.Project | undefined;

  created() {
    database.ref("/projects").once("value", snapshot => {
      if (snapshot !== null) {
        const projects = snapshot.val() || [];
        for (const proj of projects) {
          this.projects.push(proj);
        }
      }
    });
  }

  addProject = name => {
    this.projects.push({ name, color: "red", todos: [] });
    database.ref("/projects").set(this.projects);
  };

  addTodo = newTodoName => {
    if (this.selectedProject) {
      this.selectedProject.todos.push(newTodoName);
    }
  };
}
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
