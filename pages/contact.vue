<template>
  <div class="contact">
    <div class="image">
      <h2>Contact Us</h2>
      <p>Start your business journey with us right now!</p>
      <img src="/contactus.jpg" alt="" />
    </div>
    <div class="text">
      <h3>Get in touch with us!</h3>
      <div class="row">
        <div class="set">
          <Icon name="bi:phone" />
          <p class="title">Phone</p>
          <p>+97 152 222 2086</p>
        </div>
        <div class="set">
          <Icon name="eva:pin-outline" />
          <p class="title">Address</p>
          <p>Meydan Racecourse Al Meydan Road, Nad Al Sheba - Dubai - UAE</p>
        </div>
        <div class="set">
          <Icon name="clarity:email-line" />
          <p class="title">Email</p>
          <p>inara@equinix.com</p>
          <p>support@equinix.com</p>
        </div>
      </div>
    </div>
    <div class="form">
      <p>Have Any Questions</p>
      <p>Please Do Not Hesistate to Send Us a Message</p>

      <form action="">
        <input type="text" placeholder="Name" name="" id="" />
        <input type="email" placeholder="Email" name="" id="" />
        <input type="text" placeholder="Subject" name="" id="" />
        <textarea
          placeholder="Message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
    <div class="socials">
      <p>Connect With Us</p>
      <div class="social">
        <Icon name="uil:linkedin" />
        <Icon name="uil:facebook" />
        <Icon name="uil:instagram" />
        <Icon name="uil:twitter" />
      </div>
    </div>
    <div class="map">
      <div class="pin">
        <Icon name="eva:pin-fill" />
        <p>The Meydan</p>
      </div>
      <img src="/map.png" alt="" />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  document.getElementById("__nuxt").scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.contact {
  width: 100%;
  .image {
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    h2 {
      color: #d4a742;
      font-size: 40px;
      font-weight: 500;
      text-align: center;
    }

    p {
      color: #ffffff;
      font-size: 18px;
      font-weight: 200;
      margin-top: 10px;
      text-align: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.3);

      position: absolute;
      top: 0;
      left: 0;

      z-index: -1;
    }
  }

  .text {
    width: 100%;
    background: #141414;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      color: #d4a742;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .row {
      margin-top: 30px;
      width: 80%;
      max-width: 600px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .set {
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px;
        .icon {
          width: 30px;
          height: 30px;

          color: #d4a742;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }
        .title {
          color: #d4a742;
          font-size: 14px;
          font-weight: 200;
          margin-bottom: 10px;
          text-decoration: none;
        }
        p {
          color: #bebebe;
          font-size: 14px;
          font-weight: 200;
          margin-bottom: 3px;
          text-decoration: none;
          text-align: center;
        }

        &:nth-child(2) {
          border-right: 2px solid #d4a742;
          border-left: 2px solid #d4a742;
        }
      }
    }
  }

  .form {
    height: 500px;
    width: 100%;
    background: #141414;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
      color: #ececec;
      font-size: 14px;
      font-weight: 500;

      text-transform: uppercase;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      width: 90%;
      max-width: 800px;
      margin-top: 30px;

      input {
        width: 80%;
        height: 40px;
        margin-bottom: 10px;
        background: #252525;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 0 20px;

        color: #bebebe;
      }

      textarea {
        width: 80%;
        height: 200px;
        margin-bottom: 10px;

        background: #252525;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 10px 20px;

        color: #bebebe;
      }

      button {
        width: 200px;
        height: 40px;
        margin-top: 10px;
        background: #d4a742;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 0 20px;

        color: #141414;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
  .socials {
    width: 100%;
    height: 200px;
    background: #141414;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: #d4a742;
      font-size: 14px;
      font-weight: 500;

      text-transform: uppercase;
    }

    .social {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 10px;

      .icon {
        width: 30px;
        height: 30px;
        margin: 0 10px;
        color: #d4a742;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .map {
    width: 100%;
    // height: 400px;
    background: #141414;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      width: calc(100% - 20px);
    }

    .pin {
      position: absolute;
      font-size: 30px;
      left: 38%;
      top: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .icon,
    p {
      color: #d4a742;
    }

    p {
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .contact {
    .image {
      height: 300px;
    }

    .text {
      height: auto;
      padding: 20px 0;
      h3 {
        font-size: 18px;
      }
      .row {
        flex-direction: column;
        .set {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
          &:nth-child(2) {
            padding: 20px 0;
            width: 60%;
            border-right: none;
            border-left: none;
            border-top: 2px solid #d4a742;
            border-bottom: 2px solid #d4a742;
          }
        }
      }
    }

    .form {
      height: auto;
      padding: 20px 0;
      p {
        font-size: 18px;
        text-align: center;
      }
      form {
        width: 90%;
        input,
        textarea {
          width: 100%;
        }
      }
    }

    .socials {
      height: auto;
      padding: 20px 0;
      p {
        font-size: 12px;
      }
    }

    .map {
      height: auto;
      padding: 20px 0;
      border: none;
      .pin {
        left: 50%;
      }
    }
  }
}
</style>
