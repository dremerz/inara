<template>
  <div class="about">
    <div class="main">
      <h2>About Us</h2>
      <p>
        We stand as the forefront in the field of automated trading bots,
        harnessing the rapid processing capabilities of computers in comparison
        to human traders. Our approach involves employing pre-programmed
        automated trading commands that consider factors like timing, pricing,
        and volume. Our system encompasses a diverse array of trading
        strategies, including some derived from mathematical finance formulas
        and findings, along with specialized software to enhance performance.
      </p>
    </div>
    <div class="mission">
    <div class="col">
      <h3>Our Mission</h3>
      <p>
        Our objective is to assist our clients in attaining financial
        independence through value addition and offering active portfolio
        management. We achieve this by conducting market research and
        implementing strategies that align with our core principles, while also
        fostering a motivating and satisfying work environment for our
        employees.
      </p>
    </div>
    <div class="col">
      <div class="row">
        <img src="/m2.jpg" alt="" />
        <img src="/m1.jpg" alt="" />
      </div>
      <div class="row-f">
        <img src="/m3.jpg" alt="" />
      </div>
    </div>
  </div>
    <div class="mission vision">
      <div class="col">
        <h3>Our Vision</h3>
        <p>
          We utilize computer models to establish structured trade objectives,
          implement risk management strategies, and create rules for executing
          trades in a systematic manner.
        </p>
      </div>
      <div class="col">
        <img src="/v1.jpg" alt="" />
      </div>
    </div>
    <div class="mission exec">
      <div class="col">
        <h3>Executive Summary</h3>
        <p>
          By creating automations and custom strategies within Analytica,
          traders remove emotion, save time and energy as the software executes
          your trading strategies, whether you are a beginner or an experienced
          trader looking for deep functionality to maximize your stock trading
          profits, Analytica provides the tools for you. Trading features like
          paper trading, back testing, trailing stop-loss and a strategy
          designer tool that makes it easy to customize your strategy. You can
          leverage over 130 indicators and candle patterns within the platform
          to help dictate your trades. Analytica is cloud-based and supports up
          to 21 stock exchanges, and we are always adding more to the list. For
          advanced traders, Analytica has a marketplace of free and paid signals
          which you can combine with technical indicators to customize your own
          strategy.
        </p>
      </div>
    </div>
    <div class="mission exec dark col2">
      <div class="col">
        <h3>Problems</h3>
        <p>
          Humans are inherently rife with anxiety and overconfidence depending
          on the time of day. When trading, emotion equals danger. Trading bots,
          on the other hand, completely lack emotion and are immune to the hype
          and noise which befall so many, especially novice traders. Humans also
          were found lacking the ability to; abide by a strict set of rules and;
          abandon rules or habits in favor of better, more useful ones. They are
          slow to adapt when something isn’t working. But bots are continuing to
          get smarter. With advances in AI, bots are capable of self-optimizing,
          to determine the best methods to achieve the greatest outcomes for any
          given task.
        </p>
      </div>
      <div class="col">
        <h3>Product Overview</h3>
        <p>
          Our product is an electronic trading platform that can execute
          repetitive tasks at speeds of orders whose magnitude is greater than
          the human equivalent, Making use of strategic formulas to execute
          trades.
          <br />
          <br />
          Systematic Trading makes use of computer models to define trade goals,
          risk controls and rules that can execute trade orders in a methodical
          way.
          <br />
          <br />
          Pairs trading or pair trading is a long-short, ideally market-neutral
          strategy enabling traders to profit from transient discrepancies in
          relative value of close substitutes.
        </p>
      </div>
    </div>
    <div class="mission exec">
      <div class="col">
        <h3>Licenses</h3>
        <p>
          <b>Officially Approved by the Dubai Government</b>
          <br />Inara Equinix proudly holds all necessary approvals from the
          Dubai government, ensuring compliance and credibility in all our
          operations.
        </p>
      </div>
    </div>

      <div class="team">
      <h3>Our Leaders</h3>
      <div class="row">
        <div class="member">
          <h4>RIA ROBIN MOHAMED RAFI</h4>
          <p>Founder</p>
        </div>
        <div class="member">
          <h4>JAFFAR SADIQUE ABDUL RAHIM</h4>
          <p>Co Founder</p>
        </div>
      </div>
    </div>
 
    <!-- <div class="clients">
      <h3>Our Clients</h3>
      <div class="row">
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
        <div class="tiles"></div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
onMounted(() => {
  document.getElementById("__nuxt").scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    height: 500px;
    width: 100%;
    background: #141414;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      color: #d4a742;
      font-size: 40px;
      font-weight: 500;
      text-align: center;
      //   padding: 100px 0;
    }
    p {
      width: 60%;
      max-width: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: 300;
      color: #d4d4d4;
    }
  }

  .mission {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #d3d3d3;
    padding-bottom: 20px;
    padding: 50px 5%;
    width: 100%;

    .col {
      width: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
        // text-transform: uppercase;
        padding: 10px 10px;
        width: 100%;
        color: #8d670e;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        color: #141414;
        width: 100%;
        padding: 0px 10px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        width: 90%;

        .enclosure {
          width: 50%;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
        }
        img {
          width: 100%;

          height: 200px;
          object-fit: cover;
          padding: 10px;
          border-radius: 5px;
        }
      }
      .row-f {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        width: 90%;
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          padding: 0 10px;
        }
      }
    }
  }

  .vision {
    background: #141414;
    flex-direction: row-reverse;
    .col {
      width: 45%;
      p {
        color: #d4d4d4;
      }
      img {
        width: 90%;

        // margin-left: auto;
      }
    }
  }

  .exec {
    background: #d3d3d3;
    padding: 50px 5%;
    .col {
      width: 100%;
      p {
        color: #141414;
        text-align: justify;
      }
    }
  }
  .col2 {
    align-items: flex-start;
    .col {
    }
  }

  .dark {
    background: #141414;
    .col {
      p {
        color: #d4d4d4;
      }
    }
  }

  .team {
    width: 100%;
    // height: 450px;
    background: #141414;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 60px 0;
    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
      // text-transform: uppercase;
      padding: 10px 10px;
      width: 90%;
      color: #d4a742;
    }

    .row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      width: 90%;
      .member {
        width: 20%;
        min-width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          padding: 10px;
        }
        h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          // text-transform: uppercase;
          color: #ffffff;
        }
        p {
          font-size: 14px;
          font-weight: 300;
          color: #ffffff;
        }
      }
    }
  }
  .clients {
    width: 100%;
    height: 600px;
    background: #d3d3d3;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
      // text-transform: uppercase;
      padding: 10px 10px;
      width: 90%;
      color: #8d670e;
    }

    .row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-content: center;
      gap: 20px;
      width: 90%;
      .tiles {
        width: 100%;
        height: 150px;
        background: #ffffff;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .about {
    .main {
      height: auto;
      padding: 30px 0;
      h2 {
        font-size: 24px;
      }
      p {
        width: calc(90% - 20px);
        // font-size: 14px ;
        text-align: justify;
      }
    }
  }

  .mission {
    flex-direction: column;
    .col {
      width: 100% !important;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  .vision {
    flex-direction: column !important;
    .col {
      // flex-direction: column;
    }
  }

  .team {
    .row {
      flex-direction: column;
      width: 100%;
      .member {
        margin-bottom: 20px;
        width: 100% !important;
        img {
          width: 90% !important;
          border-radius: 10px;
        }
      }
    }
  }

  .about {
    .clients {
      height: auto;
      padding: 30px 0;
      .row {
        grid-template-columns: repeat(2, 1fr);
        .tiles {
          height: 200px;
        }
      }
    }
  }
}
</style>
