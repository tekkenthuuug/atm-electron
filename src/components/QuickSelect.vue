<template>
  <div class="grid tc">
    <div
      v-for="value in popularValues"
      :key="value"
      @click="$emit('set', value)"
      class="select-cell"
    >
      {{ value }}$
    </div>
    <div class="select-cell" @click="$emit('switch-to-other')">
      Other...
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickSelect",
  props: {
    popularValues: {
      type: Array,
      default: () => [5, 10, 20, 25, 50, 100, 200]
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 12px;
}
.select-cell {
  cursor: pointer;
  padding: 12px;
  background-color: rgb(0, 180, 180);
  font-size: 28px;
  width: 200px;
  border-radius: 6px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
