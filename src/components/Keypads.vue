<template>
  <div class="keypad-grid">
    <div
      v-for="value in values"
      :key="value"
      @click="$emit('append-num', value)"
      :style="value === values[values.length - 1] && findColumns()"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Keypads",
  props: {
    values: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "C"]
    }
  },
  methods: {
    findColumns() {
      const elementsInLastRow = this.values.length % 3;
      const spaceInLastRow = 3 - elementsInLastRow;
      if (spaceInLastRow === 3) {
        return undefined;
      } else {
        return `grid-column: ${elementsInLastRow} / 4;`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.keypad-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  font-size: 48px;
  div {
    cursor: pointer;
    margin: 0px 0px;
    padding: 0px 20px;
    user-select: none;
    &:hover {
      background-color: rgba(0, 255, 255, 0.1);
    }
    &:active {
      background-color: rgba(0, 255, 255, 0.2);
    }
  }
}
</style>
