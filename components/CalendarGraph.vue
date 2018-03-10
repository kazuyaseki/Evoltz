<template>
  <svg :width="width" :height="height">
    <g transform="translate(16, 20)">
      <g v-for="i in 52" :key="i" :transform=" 'translate(' + i * 13 + ', 0)'">
        <rect v-for="j in 7" :key="j + 'rect'" class="day" width="10" height="10" :x="i" :y="j * 12" fill="#ebedf0" data-count="0" :data-date=" '2017-03-' + j"/>
      </g>
      <text x="13" y="-10" class="month">Mar</text>
      <text x="61" y="-10" class="month">Apr</text>
      <text x="121" y="-10" class="month">May</text>
      <text x="169" y="-10" class="month">Jun</text>
      <text x="217" y="-10" class="month">Jul</text>
      <text x="277" y="-10" class="month">Aug</text>
      <text x="325" y="-10" class="month">Sep</text>
      <text x="373" y="-10" class="month">Oct</text>
      <text x="433" y="-10" class="month">Nov</text>
      <text x="481" y="-10" class="month">Dec</text>
      <text x="541" y="-10" class="month">Jan</text>
      <text x="589" y="-10" class="month">Feb</text>
    <text text-anchor="start" class="wday" dx="-14" dy="8" style="display: none;">Sun</text>
    <text text-anchor="start" class="wday" dx="-14" dy="20">Mon</text>
    <text text-anchor="start" class="wday" dx="-14" dy="32" style="display: none;">Tue</text>
    <text text-anchor="start" class="wday" dx="-14" dy="44">Wed</text>
    <text text-anchor="start" class="wday" dx="-14" dy="57" style="display: none;">Thu</text>
    <text text-anchor="start" class="wday" dx="-14" dy="69">Fri</text>
    <text text-anchor="start" class="wday" dx="-14" dy="81" style="display: none;">Sat</text>
  </g>
  </svg>
</template>

<script lang="ts">
export default {
  props: ["width", "height"]
};
</script>
<style src="../assets/css/global.scss" lang="scss"></style>
<style lang="scss" scoped>

</style>
