<template>
  <div class="main-img">
     <div class="static">Your Assets, Our Strategy, Your Success.</div>
    <div class="slides">
      <carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
        <slide key="1">
          <div class="carousel__item">
            <img src="/main.jpg" alt="" />
          </div>
        </slide>
        <slide key="6">
          <div class="carousel__item">
            <img src="/g3.jpg" alt="" />
          </div>
        </slide>
        <slide key="2">
          <div class="carousel__item">
            <img src="/dubai0.jpg" alt="" />
          </div>
        </slide>
        <slide key="3">
          <div class="carousel__item">
            <img src="/background.jpg" alt="" />
          </div>
        </slide>
        <slide key="4">
          <div class="carousel__item">
            <img src="/card.jpg" alt="" />
          </div>
        </slide>
        <slide key="5">
          <div class="carousel__item">
            <img src="/money.jpg" alt="" />
          </div>
        </slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel>
    </div>
  </div>
  <div class="news">
    <h2>Investment views and financial market data</h2>
    <div class="cards">
      <div class="col">
        <IvCard name="DAX" value="15891.93" place="Fankfurt" percent="-0.24%" />
        <IvCard
          name="DJ Industrial Aver"
          value="15891.93"
          place="New York"
          percent="0.56%"
        />
      </div>
      <div class="col">
        <IvCard
          name="EURO STOXX 50"
          value="34890.24"
          place="Zürich"
          percent="0.11%"
        />
        <IvCard
          name="Hang Seng"
          value="3976.5"
          place="Hong Kong"
          percent="-0.26%"
        />
      </div>
      <div class="col">
        <IvCard
          name="STOXX Europe 50"
          value="11090.22"
          place="Zürich"
          percent="-0.38%"
        />
        <IvCard name="SMI" value="4315.31" place="Zürich" percent="-0.25%" />
      </div>
      <div class="col">
        <IvCard
          name="NASDAQ 100"
          value="15462.43083"
          place="New York"
          percent="-0.14%"
        />
        <IvCard name="Further indices" value=">" />
      </div>
    </div>
  </div>
  <div class="charts">
    <Chart id="c1" />
    <Chart2 id="c2" />
  </div>
  <div class="charts">
    <Chart3 id="c3" />
  </div>
  <div class="why">
    <h2>Why Choose Us?</h2>
    <div class="feats">
      <div class="feat">
        <Icon name="carbon:improve-relevance" />
        <h3>Continuous Improvement</h3>
        <p>
          Committed to constant innovation, our team keeps you ahead by staying
          updated on market trends and adapting to change.
        </p>
      </div>
      <div class="feat">
        <Icon name="carbon:edge-node" />
        <h3>Cutting-Edge Technology</h3>
        <p>
          We constantly invest in state-of-the-art technology and software to
          provide you with the most powerful trading tools available.
        </p>
      </div>
      <div class="feat">
        <Icon name="mdi:account-service" />
        <h3>Personalized Service</h3>
        <p>
          We value every client's unique trading objectives offer personalized
          support for your specific needs and goals.
        </p>
      </div>
    </div>
  </div>
  <div class="offerings">
    <h2>Our Offerings?</h2>
    <div class="row">
      <div class="text">
        <p>Spending & Saving</p>
        <h2>Diverse Trading Strategies</h2>
        <span
          >We offer a diverse range of trading strategies, some of which are
          based on formulas and insights derived from mathematical finance.
          Whether you prefer algorithmic trading, trend following, or
          quantitative analysis, we have the strategies to suit your specific
          trading goals and risk appetite.</span
        >
      </div>
      <div class="img">
        <img src="/dollars.jpg" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="img">
        <img src="/easy.jpg" alt="" />
      </div>
      <div class="text">
        <p>Specialized Software</p>
        <h2>Ease Of Use</h2>
        <span
          >Our specialized trading software is engineered to meet the unique
          needs of traders seeking an edge in the financial markets. We provide
          you with the tools and technology required to navigate the
          complexities of modern trading effectively.</span
        >
      </div>
    </div>
    <div class="row">
      <div class="text">
        <p>Seamless Trading</p>
        <h2>Automated Trading Bots:</h2>
        <span
          >Gain a competitive edge in the financial markets with our
          state-of-the-art trading bots. These bots are meticulously programmed
          to execute trades with precision, accounting for crucial variables
          such as time, price, and volume. Let technology work tirelessly on
          your behalf to maximize your trading potential.</span
        >
      </div>
      <div class="img">
        <img src="/bot.jpg" alt="" />
      </div>
    </div>
  </div>
  

  <div class="recent-news">
    <h2>Recent News</h2>
    <div class="row">
      <div class="col">
        <NewsCard
          title="Day trading guide for today"
          content="Market experts have recommended six stocks to buy today — Divi’s Lab, Axis Bank, Gujarat Gas, Bharti Airtel, PEL and MFSL. These stocks have been selected based on technical ..."
          img="news1.png"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Best Stocks To Buy Today Under Rs 200"
          content="The benchmark Nifty 50 struck a new lifetime high and broke the critical 20,000 level on ..."
          img="stocks.jpg"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Crypto.com Becomes Official Crypto Platform Partner of PSG"
          content="Crypto.com, a leading crypto platform, has announced a long-term partnership with PSG..."
          img="/crypto.jpg"
        />
        <!-- 9345651129 -->
      </div>
      <div class="col">
        <NewsCard
          title="El Salvador Becomes First Country to Adopt Bitcoin as Legal Tender"
          content="El Salvador has made history by becoming..."
          img="/elsalvador.png"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Bank of Baroda cuts interest rates on home and other personal loans"
          content="Bank of Baroda, one of the leading public..."
          img="/bob.png"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <NewsCard
          title="Bank of Baroda cuts interest rates on home and other personal loans"
          content="Bank of Baroda, one of the leading public..."
          img="/bob.png"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Crypto.com Becomes Official Crypto Platform Partner of PSG"
          content="Crypto.com, a leading crypto platform, has announced a long-term partnership with PSG..."
          img="/crypto.jpg"
        />
        <!-- 9345651129 -->
      </div>

      <div class="col">
        <NewsCard
          title="El Salvador Becomes First Country to Adopt Bitcoin as Legal Tender"
          content="El Salvador has made history by becoming..."
          img="/elsalvador.png"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Best Stocks To Buy Today Under Rs 200"
          content="The benchmark Nifty 50 struck a new lifetime high and broke the critical 20,000 level on ..."
          img="stocks.jpg"
        />
      </div>
      <div class="col">
        <NewsCard
          title="Day trading guide for today"
          content="Market experts have recommended six stocks to buy today — Divi’s Lab, Axis Bank, Gujarat Gas, Bharti Airtel, PEL and MFSL. These stocks have been selected based on technical ..."
          img="news1.png"
        />
      </div>
    </div>
  </div>
  <div class="services">
    <h3>Our Offerings</h3>

    <div class="accordion">
      <div class="service" :class="currentAccordion == 0 ? 'expanded' : ''">
        <div class="title" @click="currentAccordion = 0">
          <p>Digital</p>
          <Icon name="eva:arrow-ios-downward-outline" />
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Digital Marketing</p>
            <span>Unlock your business's full online potential with our expert Digital Marketing services. From SEO to PPC and engaging Social Media campaigns, we drive results. Our content strategies and email marketing nurture leads effectively. We also design responsive, user-friendly websites that convert visitors into customers. Get ready to measure your success with our analytics-driven approach.</span>
          </p>
          <p >
            <p class="sub-title">Web Development</p>
            <span>Elevate your online presence with our top-notch Web Development services. We create stunning, user-friendly websites that leave a lasting impression. Our team specializes in responsive designs that adapt to any device. We prioritize both aesthetics and functionality for a seamless user experience. Whether you need a new site or an upgrade, we've got you covered.</span>
            </p>  
          <p >
            <p class="sub-title">App Development</p>
          <span>Transform your business vision into reality with our App Development expertise. We specialize in crafting user-friendly, innovative mobile apps tailored to your needs. Our skilled developers bring your ideas to life, ensuring your app is both functional and engaging. From concept to launch, we provide end-to-end solutions. Get ready to enhance your brand's digital presence and connect with your audience on the go.</span></p>
          <p >
            <p class="sub-title">SEO</p>
            <span>Boost your online visibility and drive organic traffic with our SEO services. We optimize your website with expert keyword research and content strategies. Our team improves your search engine ranking to outshine competitors. Stay ahead in the digital game and watch your business grow with our proven SEO techniques. Let us lead the way to higher search engine rankings and increased online success.</span>
          </p>
          <p >
            <p class="sub-title">Software Design</p>
            <span>Elevate your business with our Software Design expertise. We craft custom software solutions tailored to your unique needs. Our skilled team combines creativity and technical excellence to deliver user-friendly and scalable applications. From concept to deployment, we focus on innovation and efficiency. Embrace the power of bespoke software that drives your business forward.</span>
            </p>
        </div>
      </div>
      <div class="service" :class="currentAccordion == 1 ? 'expanded' : ''">
        <div class="title" @click="currentAccordion = 1">
          <p>Assets</p>
          <Icon name="eva:arrow-ios-downward-outline" />
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Stocks</p>
            <span>Streamline your business operations with our Stocks Management solutions. We optimize inventory control for efficiency and cost savings. Our system tracks stock levels in real-time, reducing excess inventory and preventing shortages. With our expert software, you'll gain valuable insights to make data-driven decisions. Take control of your stock management and ensure a seamless supply chain for your business.</span>
            
          </p>
          <p >
            <p class="sub-title">Commodities</p>
            <span>Master your commodity management with our specialized solutions. We provide comprehensive tools to optimize the procurement and distribution of commodities. Our expertise ensures you maximize efficiency and minimize risk in this dynamic market. With real-time data and advanced analytics, you'll make informed decisions that drive profitability. Gain control over your commodities and secure a competitive advantage in the industry.</span>
            
          </p>
          <p >
            <p class="sub-title">Forex</p>
            <span>Navigate the global financial markets with our Forex expertise. We offer a range of solutions to help you trade currency pairs effectively. Our platform provides real-time market data and advanced trading tools. With our expert analysis and risk management strategies, you can make informed decisions and maximize your Forex trading success. Join us to harness the potential of the world's largest financial market.</span>
            
          </p>
          <p >
            <p class="sub-title">ETFs</p>
            <span>Explore the world of diversified investments with our ETF solutions. ETFs offer a convenient way to access a wide range of assets in a single investment. Our expert guidance helps you build a diversified portfolio tailored to your financial goals. With low fees and flexibility, ETFs are an excellent choice for both novice and experienced investors. Join us to unlock the potential of this versatile investment option.</span> 
          </p>
        </div>
      </div>
      <div class="service" :class="currentAccordion == 2 ? 'expanded' : ''">
        <div class="title" @click="currentAccordion = 2">
          <p>Sales</p>
          <Icon name="eva:arrow-ios-downward-outline" />
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Gold</p>
            <span>Discover the allure of gold wholesale with our premium offerings. We specialize in sourcing and distributing high-quality gold products. Our extensive network ensures competitive prices and reliable supply. Whether you're a jeweler, investor, or institution, we cater to your bulk gold needs. Trust us to provide the finest gold products, backed by transparency and integrity in every transaction.</span>
          </p>
          <p >
            <p class="sub-title">Iron</p>
            <span>Forge strong partnerships with our iron wholesale services. We are your trusted source for high-quality iron products in bulk. With a focus on reliability and quality, we supply iron for various industries. Our competitive prices and efficient logistics ensure your needs are met seamlessly. Partner with us for your iron sourcing, and experience excellence in wholesale supply.</span>
          </p>
          <p >
            <p class="sub-title">Steel</p>
            <span>Elevate your construction and manufacturing projects with our steel wholesale solutions. We specialize in sourcing and distributing top-grade steel products in bulk. Our extensive network ensures competitive prices and timely delivery. Whether you need structural steel, sheets, or custom orders, we provide the highest quality steel to meet your requirements. Partner with us for reliable and cost-effective steel supply solutions.</span>
          </p>
          <p >
            <p class="sub-title">Aluminum</p>
            <span>Unlock the potential of aluminum with our wholesale solutions. We are your trusted source for high-quality aluminum products in bulk. Our extensive inventory and efficient logistics guarantee a reliable supply of aluminum for various industries. Whether you require sheets, extrusions, or custom orders, we provide competitive prices and superior quality. Partner with us for your aluminum sourcing needs and experience excellence in wholesale supply.</span>
          </p>
          <p >
            <p class="sub-title">Precious Metals</p>
            <span>Embrace the value of precious metals with our wholesale offerings. We specialize in sourcing and distributing a range of premium precious metals in bulk. From gold and silver to platinum and palladium, we provide top-tier quality and competitive prices. Whether you're an investor, jeweler, or industrial user, our reliable supply chain meets your precious metal needs. Partner with us to access a world of opportunity in the wholesale precious metals market.</span>
          </p>
        </div>
      </div>
      <div class="service" :class="currentAccordion == 3 ? 'expanded' : ''">
        <div class="title" @click="currentAccordion = 3">
          <p>Trading</p>
          <Icon name="eva:arrow-ios-downward-outline" />
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Gold</p>
            <span>Dive into the world of gold trading with our expert guidance. We offer a platform for seamless and secure gold trading. Our real-time market data and analysis empower you to make informed decisions. Whether you're an experienced trader or just starting, our user-friendly interface and professional support ensure a smooth experience. Join us to harness the potential of this timeless and valuable asset in the world of trading.</span>
          </p>
          <p >
            <p class="sub-title">Scrap Metal</p>
            <span>Unlock the potential of scrap metal trading with our expertise. We facilitate the buying and selling of scrap metal for industrial and recycling purposes. Our extensive network ensures a steady supply of quality scrap metal at competitive prices. Whether you're looking to source materials or monetize your scrap metal, we offer a reliable and transparent platform. Partner with us to streamline your scrap metal transactions and contribute to sustainable recycling practices.</span>
          </p>
          <p >
            <p class="sub-title">General</p>
            <span>Experience versatile solutions with our general trading expertise. We specialize in sourcing and distributing a wide range of products to meet diverse market needs. Our extensive network ensures competitive prices and reliable supply across various industries. Whether it's commodities, consumer goods, or industrial supplies, we are your trusted trading partner. Join us to streamline your procurement and distribution processes and benefit from our commitment to excellence in general trading.</span>
          </p>
          <p >
            <p class="sub-title">Metal Waste</p>
            <span>Empower your team with our metal waste training programs. We specialize in educating professionals on effective metal waste management strategies. Our tailored training modules cover recycling, sustainability, and compliance. Equip your staff with the knowledge and skills to optimize metal waste processes. Join us to ensure your organization's commitment to responsible and eco-friendly metal waste management.</span>
          </p>
          <p >
            <p class="sub-title">Electronic Money</p>
            <span>Step into the digital age of finance with our electronic money solutions. We provide secure and convenient electronic money services for seamless transactions. Whether you need digital wallets, online payments, or mobile banking, we offer user-friendly options. Our technology ensures quick and reliable electronic money transfers. Join us to experience the future of finance with ease and efficiency.</span>
          </p>
        </div>
      </div>
      <div class="service" :class="currentAccordion == 4 ? 'expanded' : ''">
        <div class="title" @click="currentAccordion = 4">
          <p>Sea Food</p>
          <Icon name="eva:arrow-ios-downward-outline" />
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Sustainable Seafood Sourcing</p>
            <span>As responsible stewards of our oceans, we're dedicated to sustainable fishing practices. We work closely with fishermen and suppliers who share our commitment to preserving marine ecosystems for generations to come.</span>
          </p>
        </div>
        <div class="content">
          <p >
            <p class="sub-title">Your Gateway to Ocean's Bounty</p>
            <span>We are a trusted partner in the world of seafood export and import. With a deep-seated commitment to quality, sustainability, and global culinary excellence, we bring the finest treasures of the sea to your plate.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="newsletter">
    <h2>Subscribe to our Newsletter</h2>
    <div class="form">
      <input type="text" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </div>
</template>

<script setup>
const currentAccordion = ref(null);

onMounted(() => {
  window.scrollTo(0, 0);
  console.log("mounted");
});
</script>

<style lang="scss" scoped>
.main-img {
  width: 100%;
  height: 650px;
  overflow: hidden;
  //   object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .static {
    width: 350px;
    height: 100%;

    top: 0;
    background: #1f1f1f;
    position: relative;
    z-index: 2;

    font-size: 50px;
    font-weight: 700;
    color: #ffffff;

    display: flex;
    // justify-content: center;
    align-items: center;
    text-align: left;
    padding-left: 20px;
    z-index: 5;

    &::after {
      content: "";
      width: 100px;
      height: 100%;
      background: #1f1f1f;
      position: absolute;
      top: 0;
      right: -60px;
      transform: skew(-7deg);
      z-index: -1;
    }
  }

  .slides {
    width: calc(100% - 300px);
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      z-index: 0;
    }
  }

  .carousel {
    height: 100%;
    width: 100%;
    position: relative;
    .carousel__viewport,
    .carousel__item,
    .carousel__track,
    .carousel__slide {
      height: 100%;
      width: 100%;
    }
  }

  .carousel__item {
    min-height: 630px;
    width: 100%;
    height: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    // border-radius: 50%;
  }

  .carousel__prev {
    z-index: 5;
  }

  .carousel__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    z-index: 3;
    bottom: 10px;
    left: 50%;
    position: absolute;
    .carousel__pagination-item {
      .carousel__pagination-button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
        margin: 0 5px;
        cursor: pointer;
        &::after {
          background-color: #ffffff;
        }
      }
    }
  }
}

.news {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 70px 0;

  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #1f1f1f;
    margin-bottom: 20px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    .col {
      min-width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      &:nth-child(1) {
        align-items: flex-start;
      }
      &:nth-child(4) {
        align-items: flex-end;
      }
    }
  }
}

.why {
  height: 550px;
  background: #1f1f1f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 30px 0;
  padding-bottom: 40px;

  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .feats {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .feat {
      height: 300px;
      width: 300px;
      border-radius: 150px;

      background: #303030;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        width: 70px;
        height: 70px;
        border-radius: 20px;
        // background: #ffffff;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 20px;
      }

      h3 {
        width: 90%;
        font-size: 20px;
        font-weight: 500;
        color: #d4a742;

        text-align: center;
      }

      p {
        width: 70%;
        font-size: 14px;
        font-weight: 300;
        color: #b4b4b4;
        text-align: center;
      }
    }
  }
}

.offerings {
  width: 100%;
  height: 1150px;
  padding: 50px 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #1f1f1f;
    margin-bottom: 20px;
  }
  .row {
    width: 80%;
    height: 300px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 20px;
      p {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        color: #d4a742;
        // text-align: center;
        margin-bottom: 10px;
      }
      h2 {
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        color: #1f1f1f;
        margin-bottom: 10px;
      }
      span {
        width: 100%;
        font-size: 16px;
        font-weight: 300;
        color: #616161;
        // text-align: center;
      }
    }
    .img {
      width: 50%;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.newsletter {
  width: 100%;
  height: 300px;
  background: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .form {
    width: 85%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 70%;
      height: 100%;
      border: none;
      outline: none;
      padding: 0 20px;
      border-radius: 5px 0 0 5px;
      font-size: 14px;
      font-weight: 300;
      color: #616161;
    }
    button {
      width: 30%;
      height: 100%;
      border: none;
      outline: none;
      border-radius: 0 5px 5px 0;
      background: #d4a742;
      color: #ffffff;
      font-size: 14px;
      font-weight: 300;
      cursor: pointer;
    }
  }
}

.recent-news {
  width: 100%;
  height: auto;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;

  padding: 20px 0;

  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #1f1f1f;
    margin-bottom: 20px;
  }

  .row {
    scroll-snap-type: x mandatory;
    display: flex;
    margin: 0 20px;
    width: 85%;

    overflow-x: auto;

    .news-card {
      scroll-snap-align: center;
      width: 400px;
      margin-left: 0;
    }
  }
  ::-webkit-scrollbar {
    // width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
}

.mission {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #141414;
  padding-bottom: 20px;
  padding: 50px 5%;

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
      color: #d4d4d4;
      width: 100%;
      padding: 0px 10px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      width: 90%;
      img {
        width: 50%;

        height: 200px;
        object-fit: cover;
        padding: 10px;
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

.charts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  // flex-direction: column;
}

.services {
  width: 100%;
  background: #141414;
  padding: 10px 0;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding: 40px 0;
  h2 {
    width: 85%;
    font-size: 24px;
    font-weight: 500;
    color: #d4d4d4;
    margin-bottom: 20px;
  }

  .accordion {
    width: 85%;
    // max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;

    .service {
      width: 100%;
      height: 50px;
      transition: 0.3s;
      border-bottom: 2px solid #494949;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 18px;
        p {
          padding: 10px 0;
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #c2c2c2;
          transition: 0.3s;
        }
      }

      .content {
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: 0.3s;
        p {
          padding: 10px 0;
          font-size: 14px;
          font-weight: 200;
          color: #bebebe;
          text-align: left;
        }
      }
    }

    .expanded {
      height: auto;

      padding-bottom: 30px;
      .title {
        p {
          color: #d4a742;
        }
        .icon {
          transform: rotate(180deg);
        }
      }

      .content {
        height: auto;
        .sub-title {
          font-size: 18px;
          font-weight: 600;
        }

        span {
          font-weight: 200 !important;
          font-size: 14px;
          color: #acacac;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .services {
    .accordion {
      height: auto;
      .expanded {
        height: auto;

        .content {
        }
      }
    }
  }
}
// for mobile scrreen
@media only screen and (max-width: 768px) {
  .charts {
    flex-direction: column;
  }
  .main-img {
    height: 400px;
    position: relative;
    .static {
      position: absolute;
      width: 200px;
      height: 100px;
      font-size: 18px;

      top: auto;
      bottom: 0;
      left: 0;

      &::after {
        width: 0;
        height: 0;
      }
    }

    .slides {
      width: 100%;
    }
  }
  .news {
    .cards {
      flex-direction: column;
      .col {
        margin: 10px 0;
        width: 80%;
      }
    }
  }

  .why {
    height: auto;

    .feats {
      flex-direction: column;
      .feat {
        margin: 10px 0;
        border-radius: 10px;
      }
    }
  }

  .offerings {
    height: auto;
    .row {
      padding: 20px 0;
      flex-direction: column;
      background: #f1f1f1;
      padding: 10px;
      box-sizing: content-box;
      border-radius: 10px;
      height: auto;
      .text {
        width: 100%;
        height: auto;
        padding: 20px 0;
        p {
          margin-bottom: 5px;
        }
        h2 {
          margin-bottom: 5px;
        }
        span {
          margin-bottom: 5px;
        }
      }
      .img {
        width: 100%;
        height: 300px;

        border-radius: 5px;
        img {
          height: 100%;
          width: auto;
        }
      }

      // odd child
      &:nth-child(odd) {
        flex-direction: column-reverse;
        .text {
          margin-bottom: 10px;
        }
      }
    }
  }

  .recent-news {
    height: auto;

    .row {
      .col {
        .news-card {
          width: calc(100vw - 40px);
        }
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
}
</style>
