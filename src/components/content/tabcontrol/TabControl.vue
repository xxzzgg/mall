<template>
  <cube-tab-bar
    v-model="selectedLabelSlots"
    show-slider
    inline
    @click="clickHandler">
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <!-- name为icon的插槽 -->
      <i slot="icon" :class="item.icon"></i>
      <!-- 默认插槽 -->
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
</template>

<script>
export default {
    name:'TabControl',
    tabs: ['流行','新款','精选']
}

</script>
<style scoped>
</style>