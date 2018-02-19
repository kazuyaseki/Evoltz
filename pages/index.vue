<template>
  <main>
    <ProjectSidebar :projects="projects" @addProject="addProject"/>
    <div class="todos">
      <ul>
        <li :key="todo" v-for="todo in selectedProject.todos">{{ todo }}</li>
      </ul>
      <div v-if="addingTask">
        <input type="text" v-model="taskName" />
        <button @click="addTask">タスクを追加する</button>
        <button @click="setAddingTaskMode(false)">キャンセル</button>
      </div>
      <button v-else @click="setAddingTaskMode(true)" class="add-task-button">+ タスクを追加</button>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";

import ProjectSidebar from "../components/ProjectSidebar.vue";
import { Types } from "../interface/types";

@Component({
  components: {
    ProjectSidebar
  }
})
export default class extends Vue {
  projects: Types.Project[] = [
    { name: "仕事", color: "red", todos: ["買い物", "洗濯", "掃除"] },
    { name: "生産性向上", color: "blue", todos: ["買い物", "洗濯", "掃除"] },
    { name: "家事", color: "yellow", todos: ["買い物", "洗濯", "掃除"] }
  ];
  selectedProject: Types.Project = this.projects[0];
  taskName: string = "";
  addingTask: boolean = false;

  addProject = name => {
    this.projects.push({ name, color: "red", todos: [] });
  };

  setAddingTaskMode(newMode) {
    this.addingTask = newMode;
  }

  addTask() {
    this.selectedProject.todos.push(this.taskName);
    this.setAddingTaskMode(false);
    this.taskName = "";
  }
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
