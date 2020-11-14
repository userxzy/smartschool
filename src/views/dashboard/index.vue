<template>
  <div class="dashboard-container">
    <now-data />
    <cricle-progress />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NowData from './module/NowData'
import CricleProgress from './module/CricleProgress'
export default {
  name: 'Dashboard',
  components: {
    NowData,
    CricleProgress
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
