<template>
  <main>
    <ProjectSidebar />
    <TodoList 
      :todos="projects[selectedProjectIndex] && projects[selectedProjectIndex].todos || []" 
      @addTodo="addTodo"
      @toggleStatus="toggleTodoStatus"
    />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

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
  selectedProjectIndex: number = 0;

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
  selectProject(index: number) {
    this.selectedProjectIndex = index;
  }

  addTodo(newTodoName: string) {
    if (this.projects[this.selectedProjectIndex].todos) {
      this.projects[this.selectedProjectIndex].todos.push(
        this.todoFactory(newTodoName)
      );
    } else {
      this.$set(this.projects[this.selectedProjectIndex], "todos", [
        this.todoFactory(newTodoName)
      ]);
    }
    database.ref("/projects").set(this.projects);
  }

  toggleTodoStatus(index) {
    let todo = this.projects[this.selectedProjectIndex].todos[index];
    todo.completed = !todo.completed;
    database.ref("/projects").set(this.projects);
  }

  todoFactory = (name: string): Types.Todo => {
    return {
      name,
      memo: "",
      completed: false
    };
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
