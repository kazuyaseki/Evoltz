<template>
  <div class="todos">
    <ul>
      <li :class="todo.completed ? 'todo completed' : 'todo'" 
        v-for="todo in todos"
        :key="todo.name"
      >
        {{ todo.name }}
      </li>
    </ul>
    <div v-if="addingTodo">
      <input type="text" v-model="todoName" @keypress.enter="addTodo" />
      <button @click="addTodo">タスクを追加する</button>
      <button @click="setAddingTodoMode(false)">キャンセル</button>
    </div>
    <button v-else @click="setAddingTodoMode(true)" class="add-Todo-button">+ タスクを追加する</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Types } from "../interface/types";

@Component({})
export default class extends Vue {
  @Prop() todos: string[];

  todoName: string = "";
  addingTodo: boolean = false;

  setAddingTodoMode(newMode) {
    this.addingTodo = newMode;
  }

  addTodo() {
    this.$emit("addTodo", this.todoName);
    this.setAddingTodoMode(false);
    this.todoName = "";
  }
}
</script>
<style lang="scss" scoped>
.add-project-button {
  border: none;
  background-color: inherit;
  color: #dd4b39;
  cursor: pointer;
}
</style>
