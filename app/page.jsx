import Image from 'next/image'
import HomeSlider from './components/HomeSlider/page'
import styles from './page.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import sideImg from '../public/images/third.png'
import Footer from './components/Footer/page';
import HomeProds from './components/HomeProds/page';
import tf from '../public/images/250Bottle.png'
import f from '../public/images/500Bottle.png'
import ol from '../public/images/1000Bottle.png'
import bg from '../public/images/secondImg.png'

export default function Home() {

  

  return (
    <>
      <HomeSlider />
      <div className={styles.secondSection + ""} style={{backgroundImage:'url('+bg.src+')'}}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <p className={styles.pureText + " mt-3"} >PURE HYDRATION</p>
          <p className={styles.supportText + " "} data-aos="fade-down">Straight From Nature!</p>
        </div>
      </div>

      <div className={styles.thirdSection + ""}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <div className="row">
            <div className="col-12">
              <p className={styles.tsPureText + " "} data-aos="fade-down">READ ABOUT</p>
              <p className={styles.tsSupportText + " "} data-aos="fade-down" >Ayzill</p>
            </div>
            <div className="col-6">
              <div className="container d-flex flex-column px-5 pt-5">

                <h4 className={styles.whyChooseUsText + " mt-5 pt-3 mx-3"} data-aos="fade-right" >WHY CHOOSE AYZILL?</h4>

                <p className={styles.helpTextThirdSection + " mt-3 mx-3"} data-aos="fade-right" >
                  Ayzill offers pure, packaged mineral water through a rigorous purification process including reverse osmosis.
                </p>

                <p className={styles.helpTextThirdSection1 + "  mt-3 mx-3"} data-aos="fade-right" >
                  We believe in the power of nature and strive to bring it to you in every sip.
                </p>

                <p className={styles.helpTextThirdSection + " mt-3 mx-3"} data-aos="fade-right" >
                  With Ayzill, you can enjoy the purity of nature in every sip. Ayzill’s commitment is to deliver pure, packaged mineral water.
                </p>
              </div>

            </div>
            <div className="col-6" data-aos="fade-left" >
              <Image src={sideImg} loading="lazy" alt="bottle in hand image" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>

      <div id='products' className={styles.thirdSection + " "}>
        <div className={styles.textSection + " pt-2 mt-5"}>
          <div className="row">
            <div className="col-12">
              <p className={styles.tsPureText + " "} data-aos="fade-down">TAKE A LOOK AT</p>
              <p className={styles.tsSupportText + " "} data-aos="fade-down" >Our Products</p>
            </div>
            <div className={styles.productsBack + " col-12"}>
              <div className="container px-5">

                <div className="container mt-4 pt-4 w-75">
                  <div className="row pt-4 align-items-center">
                    <HomeProds image={tf} bottleSize={'250'} productDesc={"The Ayzill 250 ml pack is the perfect solution for a variety of settings, including conferences, banquet halls, and home events. Its sleek design and hygienic properties make it an ideal option for guests and children alike. Additionally, its compact size allows for convenient storage in handbags and is sufficient for satisfying minor thirsts."}/>
                    <HomeProds image={f} bottleSize={'500'} productDesc={"The Ayzill 500 ml pack is an excellent choice for a variety of occasions, including conferences, banquet halls, and home events. With its sophisticated appearance and hygienic features, it provides a suitable option for guests and children alike. Furthermore, its compact design easily fits in handbags and effectively satisfies small thirsts."}/>
                    <HomeProds image={ol} bottleSize={'1000'} productDesc={" The Ayzill 1 litre pack is the ideal choice for groups or individuals, providing a convenient solution for all-day consumption. Its practical design allows for easy storage in travel bags and effectively satisfies thirsts throughout the day, with its convenient grip, is the ideal choice for short trips, providing a long-lasting solution for on-the-go hydration. Its grip allows for effortless portability, making it easy to carry anywhere."}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
