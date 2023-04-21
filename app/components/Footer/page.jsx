import styles from './page.module.css'
import Image from 'next/image'
import footerImg from '../../../public/images/footer.png'

export default function Footer() {
    return (
        <>
            {/* <Image src={footerImg} alt="footer image" className={styles.img-fluid w-100 mt-5 pt-5" /> */}
            <footer className={styles.sitefooter + " mt-3"}>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Ayzill&apos;s packaged drinking water is a fusion of nature and technology, purified through a rigorous process that includes reverse osmosis. Our goal is to provide a refreshing and healthy hydration experience while also being mindful of the environment.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className={styles.footerlinks}>
                                <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Products</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">About Us</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className={styles.footerinks}>
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Terms & Conditions</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className={styles.copyrighttext}>Copyright &copy; 2023 All Rights Reserved by
                               &nbsp;<a href="ayzill.com">Ayzill.com</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className={styles.socialicons}>
                                {/* <li><a className={styles.facebook} href="#">facebook</a></li>
                                <li><a className={styles.twitter} href="#">twitter</a></li>
                                <li><a className={styles.dribbble} href="#">dribble</a></li>
                                <li><a className={styles.linkedin} href="#">linkedin</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}