<template>
  <div class="news">
    <div class="header">
      <h1>News And Events</h1>
      <img src="/news.jpg" alt="" />
    </div>
    <div class="charts">
      <Chart id="c1" />
      <Chart2 id="c2" />
    </div>
    <div class="charts">
      <Chart3 id="c3" />
    </div>
    <div class="main-news">
      <img src="/bitcoin.jpg" alt="" />
      <div class="text">
        <h3>
          G20 Summit: Achieving PM’s vision of comprehensive global framework
          for crypto regulation
        </h3>
        <p>
          The Financial Action Task Force has already made significant strides
          in this regard. We have been voluntarily following the best practices
          and have been supporting the Government of India on complying with all
          notifications including the one under Prevention of Money Laundering
          Act (PMLA). This coupled with global implementation of an information
          sharing framework and an effective travel rule is necessary to help
          address this concern, effectively.
        </p>
        <span>Read More</span>
      </div>
    </div>
    <div class="ns">
      <NewsCard
        title="Day trading guide for today"
        content="Market experts have recommended six stocks to buy today — Divi’s Lab, Axis Bank, Gujarat Gas, Bharti Airtel, PEL and MFSL. These stocks have been selected based on technical ..."
        img="news1.png"
      />

      <NewsCard
        title="Best Stocks To Buy Today Under Rs 200"
        content="The benchmark Nifty 50 struck a new lifetime high and broke the critical 20,000 level on ..."
        img="stocks.jpg"
      />

      <NewsCard
        title="Crypto.com Becomes Official Crypto Platform Partner of PSG"
        content="Crypto.com, a leading crypto platform, has announced a long-term partnership with PSG..."
        img="/crypto.jpg"
      />

      <NewsCard
        title="El Salvador Becomes First Country to Adopt Bitcoin as Legal Tender"
        content="El Salvador has made history by becoming..."
        img="/elsalvador.png"
      />

      <NewsCard
        title="Bank of Baroda cuts interest rates on home and other personal loans"
        content="Bank of Baroda, one of the leading public..."
        img="/bob.png"
      />
      <NewsCard
        title="Latest Technologies for Development"
        content="Find out the latest Tech that would boost your development speed and efficiency..."
        img="/ser1.png"
      />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  document.getElementById("__nuxt").scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .header {
    width: 100%;
    height: 400px;
    background: #141414;
    color: #d4a742;
    font-size: 28px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      filter: brightness(0.3);
    }
    h1 {
      z-index: 1;
      color: #d4a742;
      font-size: 40px;
      font-weight: 500;
      text-align: center;
    }
  }

  .charts {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    // flex-direction: column;
  }
  .ns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;

    background: #141414;
  }

  .main-news {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    width: 100%;
    height: 600px;
    padding: 30px 20px;
    background: #141414;

    img {
      width: 58%;
      height: 100%;
      object-fit: cover;
    }

    .text {
      width: 30%;
      height: 100%;
      background: #1a1a1a;
      padding: 20px 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 10px;
        // text-transform: uppercase;
        padding: 10px 10px;
        width: 100%;
        color: #d4a742;
      }

      p {
        font-size: 14px;
        color: #ffffff;
        width: 100%;
        padding: 0px 10px;
      }

      span {
        font-size: 14px;
        color: #d4a742;
        width: 100%;
        padding: 0px 10px;
        margin-top: 10px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .news {
    .charts {
      flex-direction: column;
    }
    .header {
      height: 200px;
      h1 {
        font-size: 24px;
      }
    }
    .main-news {
      flex-direction: column;
      height: auto;
      img {
        width: 100%;
        height: 300px;
      }
      .text {
        width: 100%;
        height: auto;
        padding: 10px 10px;
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
        }
        span {
          font-size: 12px;
        }
      }
    }

    .ns {
      width: 100%;
      height: auto;

      .news-card {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
