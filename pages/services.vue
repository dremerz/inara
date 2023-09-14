<template>
  <div class="services">
    

    <carousel :items-to-show="1" :autoplay="2000">
      <slide v-for="slide in 5" :key="slide">
        <SSlide position="topleft" :image="slide" :text="content[slide-1]"/>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
      
    </carousel>

    

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
</template>

<script setup>
const currentAccordion = ref(null);
const content = [
  "Our cutting-edge digital services offer innovative solutions for your business needs, from online platforms to automation tools, enhancing your digital presence and efficiency.",
  "As leaders in the gold wholesale industry, we provide access to the finest gold products, ensuring purity and quality for your investment and trading requirements.",
  "Trust us to manage your assets with a focus on growth and security. Our experienced team tailors investment strategies to meet your financial goals.",
  "Dive into the world of stock trading with our comprehensive services. We offer the tools and expertise to help you navigate the dynamic stock market effectively.",
  "Discover the convenience of accessing a wide range of financial services, including digital solutions, gold wholesale, asset management, and stock trading, all in one location at the heart of Dubai."]

onMounted(() => {
  document.getElementById("__nuxt").scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.services {
  width: 100%;
  background: #141414;
  // padding: 10px 0;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  h3 {
    width: 90%;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    // text-transform: uppercase;

    padding: 30px 10px;
  }

  .carousel {
    .carousel__slide {
      width: 80%;
    }
  }

  .row {
    margin-top: 30px;
    width: 80%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .set {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #d4a742;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        svg {
          width: 30px;
          height: 30px;
          color: #ffffff;
        }
      }

      h4 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      p {
        font-size: 12px;
        font-weight: 400;
        color: #bebebe;
      }
    }
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
          color: #d4a842;
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
</style>
