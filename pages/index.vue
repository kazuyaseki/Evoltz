<template>
  <main>
    <div class="projects">
      <ul>
        <li :key="project.id" v-for="project of projects">
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
  projectName: string = "";
  addingProject: boolean = false;

  setAddingProjectMode(newMode) {
    this.addingProject = newMode;
  }

  addProject() {
    this.projects.push({ id: "hogeead", name: this.projectName, color: "red" });
    this.setAddingProjectMode(false);
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

.todos {
  grid-area: g1;
  background-color: #fff;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
}
</style>
