<template>
  <div class="projects">
    <ul>
      <li :key="project.name" v-for="project of projects">
        <span class="project-icon" :style="{ backgroundColor: project.color }"></span>
        {{ project.name }}
      </li>
    </ul>
    <div v-if="addingProject">
      <input type="text" v-model="projectName" />
      <button @click="addProject">プロジェクトを追加する</button>
      <button @click="setAddingProjectMode(false)">キャンセル</button>
    </div>
    <button v-else @click="setAddingProjectMode(true)" class="add-project-button">+ プロジェクトを追加</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() projects: { name: string; color: string }[];

  projectName: string = "";
  addingProject: boolean = false;

  setAddingProjectMode(newMode) {
    this.addingProject = newMode;
  }

  addProject() {
    this.projects.push({ name: this.projectName, color: "red" });
    this.setAddingProjectMode(false);
    this.projectName = "";
  }
}
</script>
<style lang="scss" scoped>
.projects {
  grid-area: g0;
  font-size: 14px;
  ul {
    list-style: none;
    padding: 0px;
    li {
      padding: 8px 10px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
      }
    }
  }
}
.project-icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 8px;
}
.add-project-button {
  border: none;
  background-color: inherit;
  color: #dd4b39;
  cursor: pointer;
}
</style>
