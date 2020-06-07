<template>
  <div class="recommend">
    <div v-for="item of recommends" :key="item.id" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
      recommends:{
        type: Array,
        default () {
          return []
        }
      }
    }

}

</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
 padding: 15px 0 15px;
 border-bottom: 8px solid #ddd;
 justify-content:center;
}
.item img{
  flex: 1 , 1, auto;
  width: 93px;
  padding: 5px;

}
.title {
  margin-left: 15px;
}
</style>