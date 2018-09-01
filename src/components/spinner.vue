<template>
  <div class="fullscreen-cover" v-show="show">
    <div class="fullscreen-cover-content">
      <i class="fas fa-circle-notch fa-3x fa-spin fa"></i>
      <div class="fullscreen-cover-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner-fullscreen",
  props: {
    text: {
      type: String,
      default: "กำลังโหลดข้อมูล"
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.fullscreen-cover {
  position: fixed;
  z-index: 9999999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
}

.fullscreen-cover-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.fullscreen-cover-text {
  margin: auto;
  font-size: 16px;
  color: black;
}

.fa {
  color: 'black';
  margin-bottom:7px;
}
</style>
