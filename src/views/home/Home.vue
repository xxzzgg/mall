<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <feature-view />
    <tab-control />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home.js'
import HomeSwiper from 'components/common/swiper/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureViem'
import TabControl from 'components/content/tabcontrol/TabControl'
export default {
    name:'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabControl
    },
    data () {
      return {
        banners: [],
        recommends: [],

      }
    },
    created () {
      //1.请求数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }

}

</script>
<style scoped>
  .home-nav {
     background-color: var(--color-tint);
  }

</style>