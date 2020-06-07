<template>
  <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="banner of banners" :key="banner.id">
      <img :src="banner.image" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        swiperOptions: {         
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          loop: true
        }
      }
    }
  }
</script>

<style scoped>
    .swiper-container{
    --swiper-pagination-color: #fff;/* 两种都可以 */
  }
</style>