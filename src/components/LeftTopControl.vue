<template>
  <div class="left-top-control cyan-glow-onhover" @click="$emit('click')">
    <svg width="20px" height="20px" viewBox="0 0 306 306" fill="#fff">
      <g>
        <g>
          <polygon
            points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"
          />
        </g>
      </g>
    </svg>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "LeftTopControl",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/_shared-styles.scss";

.left-top-control {
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 18px;
  display: flex;
  padding: 6px 10px 6px 6px;
  transition: all 0.2s ease-in-out;
  p {
    margin-left: 6px;
  }
  &:hover {
    border-radius: 4px;
  }
}
</style>
