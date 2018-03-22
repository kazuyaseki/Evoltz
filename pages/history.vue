<template>
  <main>
    <CalendarGraph
      :width="780"
      :height="134"
    />
    <doneProject 
      :projectName="'hoge'"
      :doneTodos="doneTodos"
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

@Component({
  components: {
    CalendarGraph,
    doneProject
  },
  computed: { ...mapState(["doneTodos"]) }
})
export default class extends Vue {
  data() {
    return {
      selectedDate: undefined
    };
  }
}
</script>
<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1080px;
  min-height: 100%;
}
</style>
