<template>
  <main>
    <CalendarGraph
      :width="780"
      :height="134"
    />
    <doneProject 
      v-for="doneProject in doneProjects"
      :key="doneProject.id"
      :projectName="doneProject.name"
      :doneTodos="doneProject.todos"
    />
  
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapState } from "vuex";

import CalendarGraph from "../components/CalendarGraph.vue";
import doneProject from "../components/doneProject.vue";
import { Types } from "../interface/types";

export default {
  components: {
    CalendarGraph,
    doneProject
  },
  data() {
    return {
      selectedDate: undefined
    };
  },
  computed: {
    ...mapState(["doneTodos"]),
    doneProjects: () =>
      this.selectedDate ? this.doneTodos[this.selectedDate] : []
  }
};
</script>
<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1080px;
  min-height: 100%;
}
</style>
