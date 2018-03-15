<template>
  <main>
    <CalendarGraph
      :width="780"
      :height="134"
    />
    <doneProject :projectName="'hoge'" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import CalendarGraph from "../components/CalendarGraph.vue";
import doneProject from "../components/doneProject.vue";
import { Types } from "../interface/types";

@Component({
  components: {
    CalendarGraph,
    doneProject
  }
})
export default class extends Vue {}
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
</style>
