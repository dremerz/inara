<template>
  <nav :class="navBarOpen ? 'nav-open' : ''">
    <div class="logo" @click="home">
      <img src="/logo.png" alt="" />
      <p>INARA EQUINIX</p>
    </div>
    <div class="nav-items" :class="navBarOpen ? 'open' : ''">
      <router-link @click="navBarOpen = false" to="/">Home</router-link>
      <router-link @click="navBarOpen = false" to="/about">About</router-link>
      <router-link @click="navBarOpen = false" to="/services"
        >Services</router-link
      >
      <router-link @click="navBarOpen = false" to="/news">News</router-link>
      <router-link @click="navBarOpen = false" to="/contact"
        >Contact</router-link
      >
    </div>
    <div class="ham">
      <Icon name="eva:menu-outline" @click="navBarOpen = !navBarOpen" />
    </div>
  </nav>
</template>

<script setup>
const navBarOpen = ref(false);
const route = useRoute();
const home = () => {
  navigateTo("/");
  document.getElementById("__nuxt").scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
nav {
  height: 70px;
  background: #141414;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ffffff;
  border-bottom: 2px solid #d4a742;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  .logo {
    cursor: pointer;
    width: 100px;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;
    padding-top: 10px;

    img {
      height: 60%;
    }

    p {
      font-size: 9px;
    }
  }

  .nav-items {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      color: #ffffff;
    }

    .router-link-active {
      color: #d4a742;
    }
  }

  .ham {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  nav {
    height: 70px;
    background: #141414;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #ffffff;
    border-bottom: 2px solid #d4a742;
    border-top: 2px solid #141414;

    position: fixed;
    width: 100%;
    top: 0;

    z-index: 20;

    .logo {
      width: 100px;
      height: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      flex-direction: column;
      padding-top: 10px;

      img {
        height: 60%;
      }

      p {
        font-size: 9px;
      }
    }

    .ham {
      width: 40%;
      height: 100%;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      margin: 0 20px;

      .icon {
        width: 30px;
        height: 30px;
        color: #d4d4d4;
      }
    }

    .nav-items {
      width: 100%;
      height: 400px;

      position: fixed;
      background: #141414;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      top: -400px;
      transition: top 0.5s ease-in-out;

      z-index: -1;

      a {
        text-decoration: none;
        color: #ffffff;
      }

      .router-link-active {
        color: #d4a742;
      }
    }

    .open {
      top: 70px;
      border-bottom: 2px solid #d4a742;
    }
  }
  .nav-open {
    border-bottom: 0px;
  }
}
</style>
