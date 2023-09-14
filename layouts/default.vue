<template>
  <header>
    <NavBar />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <div class="footer-data">
      <div class="info">
        <div class="imges">
          <img src="/logo.png"  alt="" />
<br>
           <img src="/dubai.png" alt="" />

          <img src="/meydan.png" alt="" />

          <img src="/dubaimun.png" alt="" />
          <img src="/sira.png" alt="" />
         
        </div>
        <h3>About Us</h3>
        <p>
          Pioneering the forefront of automated trading, we leverage advanced
          computer power to outperform human traders.
        </p>
      </div>
      <div class="services">
        <h3>Services</h3>
        <NuxtLink to="services">Wholesale Buying</NuxtLink>
        <NuxtLink to="services">Scrap & Metals</NuxtLink>
        <NuxtLink to="services">Trading</NuxtLink>
        <NuxtLink to="services">Sea Food</NuxtLink>
      </div>
      <div class="services">
        <h3>Links</h3>
        <NuxtLink to="services">Newsroom</NuxtLink>
        <NuxtLink to="services">Locations</NuxtLink>
        <NuxtLink to="services">Services</NuxtLink>
      </div>
      <div class="services">
        <h3>Contact Us</h3>
        <p><Icon name="entypo:phone" /> +97 152 222 2086</p>
        <p><Icon name="entypo:email" /> support@inaraequinox.com</p>
        <div class="socials">
          <Icon name="uil:linkedin" />
          <Icon name="uil:facebook" />
          <Icon name="uil:instagram" />
          <Icon name="uil:twitter" />
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2023 Inara Equinox. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  height: 300px;
  background: #111111;
  color: #ffffff;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  // align-items: center;
  // position: sticky;

  .footer-data {
    display: flex;
    justify-content: space-around;
    // align-items: center;
    padding: 0 30px;
    padding-top: 10px;
    height: 100%;
    // margin-bottom: 20px;
    color: #bebebe;

    h3 {
      color: #d4a742;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    a {
      color: #bebebe;
      font-size: 14px;
      font-weight: 200;
      margin-bottom: 10px;
      text-decoration: none;

      &:hover {
        color: #ffffff;
      }
    }

    .info {
      width: 35%;

      .imges {
        img {
          height: 60px;
          margin-right: 10px;
        }
      }

      h3 {
        margin-top: 10px;
        color: #ececec;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          background-color: #b48a28;
          height: 2px;
          box-sizing: border-box;
          width: 50px;
        }
      }

      p {
        font-size: 14px;
        font-weight: 200;
      }
      .p-logo {
        color: #ececec;
        font-size: 10px;
        font-weight: 200;
        width: 100px;
      }
    }

    .services {
      width: 20%;
      display: flex;
      // justify-content: center;
      // align-items: center;
      flex-direction: column;

      h3 {
        color: #ececec;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          background-color: #b48a28;
          height: 2px;
          box-sizing: border-box;
          width: 50px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 200;
      }

      .socials {
        display: flex;
        justify-content: space-between;
        width: 150px;
        margin-top: 20px;

        .icon {
          margin-right: 10px;
          font-size: 22px;
          color: #bebebe;

          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }

  .footer-bottom {
    background: #111111;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 200;
    border-top: 2px solid #383838;
  }
}

main {
  padding-top: 70px;
}

@media only screen and (max-width: 768px) {
  footer {
    height: auto;
    .footer-data {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 10px;

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        margin-bottom: 20px;

        img {
          margin-bottom: 10px;
        }
      }

      .services {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: center;
        margin-bottom: 20px;

        border-left: 2px solid #d4a742;
        padding-left: 20px;

        .socials {
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
