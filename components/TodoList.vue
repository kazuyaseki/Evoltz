<template>
  <div class="todos">
    <ul>
      <li :class="todo.completed ? 'todo completed' : 'todo'" 
        v-for="(todo, index) in todos"
        :key="todo.name"
        :data-index="index"
        @click="toggleStatus(index)"
        @mouseover="showTooltip"
        @mouseout="removeTooltip"
      >
        <span>{{ todo.name }}</span>
        <button class="delete-button" @click.stop="deleteProject(index)">×</button>
      </li>
    </ul>
    <Tooltip v-if="showingTooltip" :message="currentMemo" :positions="currentTooltipPositions" />

    <div v-if="addingTodo">
      <input type="text" v-model="todoName" @keypress.enter="addTodo" />
      <button @click="addTodo">タスクを追加する</button>
      <button @click="setAddingTodoMode(false)">キャンセル</button>
    </div>
    <button v-else @click="setAddingTodoMode(true)" class="add-todo-button">+ タスクを追加</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Types } from "../interface/types";
import Tooltip from "./common/Tooltip.vue";
import * as MUTATION_TYPES from "../store/mutation-types";

@Component({
  components: {
    Tooltip
  }
})
export default class extends Vue {
  @Prop() todos: Types.Todo[];

  todoName: string = "";
  addingTodo: boolean = false;
  showingTooltip: boolean = false;
  currentMemo: string = "";
  currentTooltipPositions = { x: "0px", y: "0px" };

  setAddingTodoMode(newMode) {
    this.addingTodo = newMode;
  }

  showTooltip(e) {
    const index = Number(e.target.getAttribute("data-index"));
    const memo = this.todos[index].memo;
    if (memo.length > 0) {
      this.showingTooltip = true;
      this.currentMemo = memo;
      this.currentTooltipPositions = {
        x: e.target.offsetLeft + "px",
        y: e.target.offsetHeight + 100 + "px"
      };
    }
  }

  removeTooltip() {
    this.showingTooltip = false;
  }

  addTodo() {
    this.$store.dispatch(MUTATION_TYPES.ADD_TODO, this.todoName);
    this.setAddingTodoMode(false);
    this.todoName = "";
  }

  toggleStatus(index: number) {
    this.$store.dispatch(MUTATION_TYPES.TOGGLE_TODO, index);
  }
}
</script>
<style lang="scss" scoped>
.todos {
  padding: 3px 15px;
  ul,
  li {
    list-style-type: none;
    margin-left: 0px;
    padding-left: 0px;
  }
}
.todo {
  display: flex;
  width: 30%;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
    transition: all 0.5s;
  }
}
.completed {
  span {
    text-decoration: line-through;
  }
}
.add-todo-button {
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
