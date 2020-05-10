<template>
  <div class="drawer">
    <div class="spinner-outer spinner">
      <div class="spinner-inner spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingDrawer"
};
</script>

<style lang="scss">
.drawer {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeDrawer 0.4s ease-in-out forwards;
}
@keyframes fadeDrawer {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.spinner {
  border-radius: 50%;
  border: 8px solid rgb(77, 208, 241);
}
.spinner-outer {
  height: 180px;
  width: 180px;
  padding: 10px;
  animation: spinner 1.5s ease-in-out infinite;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
.spinner-inner {
  width: 100%;
  height: 100%;
  animation: spinner 2s ease-in-out infinite;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
