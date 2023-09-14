<template>
  <div class="iv-card">
    <div class="value">
      <p class="name">{{ name }}</p>
      <p>{{ value }}</p>
    </div>
    <div class="small">
      <p>{{ place }}</p>
      <p>{{ percent }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name: String,
  value: String,
  place: String,
  percent: String,
});
</script>

<style lang="scss" scoped>
.iv-card {
  min-width: 200px;
  width: 100%;
  height: 50px;
  background: #efefef;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px 10px;

  .value {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    p {
      font-size: 15px;
      font-weight: 500;
      color: #1a1a1a;
    }

    .name {
      color: #d4a742;
    }
  }

  .small {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    p {
      font-size: 12px;
      font-weight: 500;
      color: #4b4b4b;
    }
  }
}
</style>
