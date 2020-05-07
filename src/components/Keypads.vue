<template>
  <div class="keypad-grid">
    <div
      v-for="keypad in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
      :key="keypad"
      @click="$emit('append-pin-num', keypad)"
    >
      {{ keypad }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Keypads"
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
  div:last-child {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
</style>
