<template>
  <div>
    <div id="window-drag"></div>
    <nav id="nav">
      <span class="navBtn" id="minimize" @click="minimizeWindow">_</span>
      <span class="navBtn" @click="closeApp">×</span>
    </nav>
  </div>
</template>

<script>
const { ipcRenderer, remote } = require("electron");
export default {
  name: "Navigation",
  methods: {
    closeApp: () => {
      ipcRenderer.send("close-app");
    },
    minimizeWindow: () => {
      remote.BrowserWindow.getFocusedWindow().minimize();
    }
  }
};
</script>

<style lang="scss" scoped>
#window-drag {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  -webkit-app-region: drag;
}
nav {
  position: absolute;
  right: 0;
  top: 0;
  padding: 6px 24px 0 0;
  width: 100%;
  z-index: 100;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
}
.navBtn {
  cursor: pointer;
  font-size: 36px;
  user-select: none;
}
#minimize {
  margin-bottom: 10px;
}
</style>
