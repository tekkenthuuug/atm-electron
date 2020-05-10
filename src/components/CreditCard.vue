<template>
  <div
    class="credit-card"
    @click="$emit('set-selected-card', cardInfo.id, cardInfo.holderName)"
    v-bind:class="{ 'is-selected': isSelected }"
  >
    <svg
      id="Capa_1"
      height="42"
      viewBox="0 0 512 512"
      width="42"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m437 41h-362c-41.355 0-75 33.645-75 75v280c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75v-280c0-41.355-33.645-75-75-75zm45 355c0 24.813-20.187 45-45 45h-362c-24.813 0-45-20.187-45-45v-280c0-24.813 20.187-45 45-45h362c24.813 0 45 20.187 45 45z"
      />
      <path
        d="m437 101h-362c-8.284 0-15 6.716-15 15v280c0 8.284 6.716 15 15 15h362c8.284 0 15-6.716 15-15v-280c0-8.284-6.716-15-15-15zm-347 30h159.787l-4.394 4.394c-2.813 2.812-4.393 6.627-4.393 10.606v35h-31v-5c0-8.284-6.716-15-15-15h-105zm212 80v90h-92v-90zm-212-20h90v50h-90zm0 80h90v50h-90zm151 88.787-21.213 21.213h-129.787v-30h105c8.284 0 15-6.716 15-15v-5h31zm181 21.213h-159.787l4.394-4.394c2.813-2.812 4.393-6.627 4.393-10.606v-35h31v5c0 8.284 6.716 15 15 15h105zm0-60h-90v-50h90zm0-80h-90v-50h90zm0-80h-105c-8.284 0-15 6.716-15 15v5h-31v-28.787l21.213-21.213h129.787z"
      />
    </svg>
    <h3>
      {{ convertCardNo(cardInfo.id) }}
    </h3>
    <h4>{{ cardInfo.holderName }}</h4>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  props: {
    cardInfo: Object,
    isSelected: Boolean
  },
  methods: {
    convertCardNo(cardNo) {
      let converted = "";
      for (let i = 0; cardNo.length > i; i += 4) {
        converted += " " + cardNo.slice(i, i + 4);
      }
      return converted;
    }
  }
};
</script>

<style lang="scss" scoped>
.is-selected {
  $selected-color: rgb(200, 220, 80);
  border-color: $selected-color !important;
  color: $selected-color !important;
  svg {
    fill: $selected-color !important;
  }
}
.credit-card {
  cursor: pointer;
  $card-height: 180px;
  border-radius: 24px;
  height: $card-height;
  width: calc(#{$card-height} * 1.5);
  border: 4px solid white;
  padding: 0 0 28px 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  svg {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    $hover-color: rgb(170, 210, 170);
    border-color: $hover-color;
    color: $hover-color;
    svg {
      fill: $hover-color;
    }
  }
  h3 {
    margin-top: 8px;
  }
}
</style>
