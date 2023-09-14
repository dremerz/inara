<template>
  <div class="news-card">
    <div class="img">
      <img :src="img" alt="" />
    </div>
    <h4>{{ title }}</h4>
    <p>
      {{ content }}
    </p>
    <span>Read More</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Investment in Company",
  },
  content: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae aperiam rem sit, pariatur quo iure odit! Amet, officiis necessitatibus.",
  },
  img: {
    type: String,
    default: "/off1.jpg",
  },
});
</script>

<style lang="scss" scoped>
.news-card {
  width: 27%;
  height: 400px;
  background: #1a1a1a;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  margin: 20px;
  .img {
    height: 50%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    color: #d4a742;
    width: 90%;
  }
  p {
    font-size: 14px;
    padding: 10px;
    color: #ffffff;
    width: 90%;
  }

  span {
    font-size: 14px;
    padding: 10px;
    color: #d4a742;
    width: 90%;

    cursor: pointer;
  }
}
</style>
