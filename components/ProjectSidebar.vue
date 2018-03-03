<template>
  <div class="projects">
    <ul>
      <li 
        :class="selectedProjectIndex === index ? 'selected' : ''" 
        :key="project.name" 
        v-for="(project, index) of projects"
        @click="selectProject(index)"
      >
        <span class="project-icon" :style="{ backgroundColor: project.color }"></span>
        {{ project.name }}
        <button class="delete-button" @click.stop="deleteProject(index)">×</button>
      </li>
    </ul>
    <div v-if="addingProject">
      <input type="text" v-model="projectName"  @keypress.enter="addProject" />
      <button @click="addProject">プロジェクトを追加する</button>
      <button @click="setAddingProjectMode(false)">キャンセル</button>
    </div>
    <button v-else @click="setAddingProjectMode(true)" class="add-project-button">+ プロジェクトを追加</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { mapState } from "vuex";
import { Types } from "../interface/types";

@Component({
  computed: { ...mapState(["selectedProjectIndex"]) }
})
export default class extends Vue {
  @Prop() projects: Types.Project[];

  projectName: string = "";
  addingProject: boolean = false;

  setAddingProjectMode(newMode) {
    this.addingProject = newMode;
  }

  addProject() {
    this.$store.dispatch("addProject", this.projectName);
    this.setAddingProjectMode(false);
    this.projectName = "";
  }

  deleteProject(index) {
    this.$store.dispatch("deleteProject", index);
  }

  selectProject(index) {
    this.$store.commit("selectProject", index);
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
      display: flex;
      padding: 8px 10px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
      }
    }
  }
}
.selected {
  background-color: #fff;
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
.delete-button {
  margin-left: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
