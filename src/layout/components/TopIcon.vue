<template>
  <div class="main">
    <div class="top_icon" :class="{'isOpen': !sidebar.opened}">
      <div class="top_inner">
        <div class="company_logo" :class="{'isOpenLogo': !sidebar.opened}">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
        </div>
        <div v-if="sidebar.opened" class="company_title">智慧校园系统</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>
<style lang="scss" scoped>
  $sideBarWidth: 54px!important;
  .isOpen {
    pointer-events: none;
    transition-duration: 0.28s;
    transform: translate3d($sideBarWidth, 0, 0);
    width: 54px!important;
  }
  .isOpenLogo {
    transition: transform .28s;
    width: 15px!important;
    height: 15px!important;
  }
  .top_icon {
    pointer-events: none;
    transition-duration: 0.28s;
    transform: translate3d($sideBarWidth, 0, 0);
    position: absolute;
    z-index: 1001;
    width: 256px;
    height: 50px;
    box-shadow: 4px 4px 4px rgba($color: #304156, $alpha: 0.05);
    background: rgba($color: #304156, $alpha: 0.95);
    color: #fff;
    top: 0;
    left: 0;
    .top_inner {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0 20px;
      height: 100%;
      .company_logo {
        height: 30px;
        width: 30px;
        background: #f5f5f5;
        border-radius: 30px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 25px;
        }
      }
      .company_title {
        padding-left: 5px;
        color: rgba($color: #fff, $alpha: 0.85);
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
