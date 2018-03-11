<template>
  <svg :width="width" :height="height">
    <g transform="translate(16, 20)">
      <g v-for="i in 52" :key="i" :transform=" 'translate(' + i * 13 + ', 0)'">
        <rect v-for="j in 7" :key="j + 'rect'" class="day" width="10" height="10" :x="i" :y="j * 12" fill="#ebedf0" data-count="0" :data-date=" '2017-03-' + j"/>
      </g>

      <text :key="month" v-for="(month, index) in months" :x="13 + 50 * index" y="0" class="month">{{month}}</text>
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
  props: ["width", "height"],
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  }
};
</script>
<style src="../assets/css/global.scss" lang="scss"></style>
<style lang="scss" scoped>

</style>
