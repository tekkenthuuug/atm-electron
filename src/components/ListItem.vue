<template>
  <div class="transaction-item cyan-glow">
    <h2>{{ title }}</h2>
    <div class="transaction-item__details">
      <p class="transaction-item__date">
        {{ new Date(date).toLocaleString("en-GB") }}
      </p>
      <p v-if="Boolean(value)" :class="getValueClass(value)">{{ value }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionListItem",
  props: {
    title: {
      type: String
    },
    value: {
      type: Number
    },
    date: {
      type: String
    }
  },
  methods: {
    getValueClass(value) {
      let valueClass = ["transaction-item__value"];
      if (value > 0) {
        valueClass.push("green");
      } else {
        valueClass.push("red");
      }
      return valueClass;
    }
  }
};
</script>

<style lang="scss">
.transaction-item {
  width: 400px;
  margin: 12px;
  padding: 6px 12px;
  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__value {
    font-size: 26px;
    font-weight: 800;
  }
  &__date {
    color: rgb(185, 185, 185);
  }
}
</style>
