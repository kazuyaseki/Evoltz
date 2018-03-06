<template>
  <svg :width="width" :height="height">
    <g transform="translate(16, 20)">
        <g transform="translate(0, 0)">
            <rect class="day" width="10" height="10" x="13" y="0" fill="#ebedf0" data-count="0" data-date="2017-03-05"/>
            <rect class="day" width="10" height="10" x="13" y="12" fill="#ebedf0" data-count="0" data-date="2017-03-06"/>
            <rect class="day" width="10" height="10" x="13" y="24" fill="#ebedf0" data-count="0" data-date="2017-03-07"/>
            <rect class="day" width="10" height="10" x="13" y="36" fill="#ebedf0" data-count="0" data-date="2017-03-08"/>
            <rect class="day" width="10" height="10" x="13" y="48" fill="#ebedf0" data-count="0" data-date="2017-03-09"/>
            <rect class="day" width="10" height="10" x="13" y="60" fill="#ebedf0" data-count="0" data-date="2017-03-10"/>
            <rect class="day" width="10" height="10" x="13" y="72" fill="#ebedf0" data-count="0" data-date="2017-03-11"/>
        </g>
        <g transform="translate(650, 0)">
            <rect class="day" width="10" height="10" x="-37" y="0" fill="#7bc96f" data-count="7" data-date="2018-02-18"/>
            <rect class="day" width="10" height="10" x="-37" y="12" fill="#c6e48b" data-count="4" data-date="2018-02-19"/>
            <rect class="day" width="10" height="10" x="-37" y="24" fill="#7bc96f" data-count="11" data-date="2018-02-20"/>
            <rect class="day" width="10" height="10" x="-37" y="36" fill="#c6e48b" data-count="6" data-date="2018-02-21"/>
            <rect class="day" width="10" height="10" x="-37" y="48" fill="#c6e48b" data-count="1" data-date="2018-02-22"/>
            <rect class="day" width="10" height="10" x="-37" y="60" fill="#c6e48b" data-count="3" data-date="2018-02-23"/>
            <rect class="day" width="10" height="10" x="-37" y="72" fill="#c6e48b" data-count="1" data-date="2018-02-24"/>
        </g>
        <g transform="translate(663, 0)">
            <rect class="day" width="10" height="10" x="-38" y="0" fill="#c6e48b" data-count="1" data-date="2018-02-25"/>
            <rect class="day" width="10" height="10" x="-38" y="12" fill="#c6e48b" data-count="2" data-date="2018-02-26"/>
            <rect class="day" width="10" height="10" x="-38" y="24" fill="#c6e48b" data-count="1" data-date="2018-02-27"/>
            <rect class="day" width="10" height="10" x="-38" y="36" fill="#c6e48b" data-count="1" data-date="2018-02-28"/>
            <rect class="day" width="10" height="10" x="-38" y="48" fill="#c6e48b" data-count="1" data-date="2018-03-01"/>
            <rect class="day" width="10" height="10" x="-38" y="60" fill="#c6e48b" data-count="1" data-date="2018-03-02"/>
            <rect class="day" width="10" height="10" x="-38" y="72" fill="#7bc96f" data-count="7" data-date="2018-03-03"/>
        </g>
        <g transform="translate(676, 0)">
            <rect class="day" width="10" height="10" x="-39" y="0" fill="#7bc96f" data-count="12" data-date="2018-03-04"/>
            <rect class="day" width="10" height="10" x="-39" y="12" fill="#c6e48b" data-count="1" data-date="2018-03-05"/>
            <rect class="day" width="10" height="10" x="-39" y="24" fill="#c6e48b" data-count="1" data-date="2018-03-06"/>
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
<style lang="scss" scoped>

</style>
