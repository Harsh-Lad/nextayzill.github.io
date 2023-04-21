'use client'
import styles from './page.module.css'
import Image from 'next/image'
import left from '../../public/images/bCC.png'
import test1 from '../../public/images/0e64a657-2f43-4aa8-a6ef-f03aa37745e4.jpg'
import tf from '../../public/images/250Bottle.png'
import { Icon } from '@iconify/react';


export default function About() {
    return (
        <>
            <section id="" className={styles.hero + " d-flex align-items-center text-center"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos="fade-left" className="text-uppercase text-white fw-semibold display-1">Welcome to Ayzill
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className={styles.leftImage + " col-10  col-sm-8 col-lg-6"}>
                            <Image src={left} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Ayzill</h1>
                            <p className="lead">Ayzill is a new packaged drinking water and natural spring water brand that focuses on providing customers with the highest quality of drinking water. The company sources its water from natural springs or deep wells and uses a rigorous purification process, including reverse osmosis and other filtering methods, to ensure that every bottle of Ayzill water is pure and free from contaminants and other substances that can affect its taste. The brand is dedicated to providing customers with a refreshing and healthy hydration experience, and is committed to preserving the environment through sustainable practices.</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className={styles.tsPureText + " "} data-aos="fade-down">TAKE A LOOK AT</p>
            <p className={styles.tsSupportText + " "} data-aos="fade-down" >Our Variants</p>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center ">
                    <div className="card" style={{ width: '18rem' }}>
                        <Image className="card-img-top img-fluid" src={tf} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">250ml</h5>
                            <a href="#" className="btn btn-primary disabled w-100">Pack of 48 bottles</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center ">
                    <div className="card" style={{ width: '18rem' }}>
                        <Image className="card-img-top img-fluid" src={tf} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">500ml</h5>
                            <a href="#" className="btn btn-primary disabled w-100">Pack of 24 bottles</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center ">
                    <div className="card" style={{ width: '18rem' }}>
                        <Image className="card-img-top img-fluid" src={tf} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">1 litre</h5>
                            <a href="#" className="btn btn-primary disabled w-100">Pack of 12 bottles</a>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.section + " mt-4"}>
                <div className={styles.row + " mt-4"}>
                    <h1 className={styles.h1 + ''}>Our Team</h1>
                </div>
                <div className={styles.row1 + ""}>

                    <div className={styles.column + ""}>
                        <div className={styles.card + " "}>
                            <div className={styles.imgcontainer + " "}>
                                {/* <Image src={test1} className={styles.img} alt='' /> */}

                            </div>
                            <h3 className={styles.h3}>Mr. Rajesh Sonpal</h3>
                            <p className={styles.p}>Managing Director of Ayzill</p>
                            <div className={styles.icons + " "}>
                                <a href="#">
                                    <Icon icon="material-symbols:mail-outline" />
                                </a>
                                <a href="#">
                                    <Icon icon="ant-design:linkedin-outlined" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:instagram" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:facebook" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column + ""}>
                        <div className={styles.card + " "}>
                            <div className={styles.imgcontainer + " "}>
                                {/* <Image src={test1} className={styles.img} alt='' /> */}

                            </div>
                            <h3 className={styles.h3}>Mrs. Leena Sonpal</h3>
                            <p className={styles.p}>Co-Founder of Ayzill</p>
                            <div className={styles.icons + " "}>
                                <a href="#">
                                    <Icon icon="material-symbols:mail-outline" />
                                </a>
                                <a href="#">
                                    <Icon icon="ant-design:linkedin-outlined" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:instagram" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:facebook" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className={styles.column + ""}>
                        <div className={styles.card + " "}>
                            <div className={styles.imgcontainer + " "}>
                                {/* <Image src={test1} className={styles.img} alt='' /> */}

                            </div>
                            <h3 className={styles.h3}>Mr. Kamlesh Sonpal</h3>
                            <p className={styles.p}>Sales & Marketing Head</p>
                            <div className={styles.icons + " "}>
                                <a href="#">
                                    <Icon icon="material-symbols:mail-outline" />
                                </a>
                                <a href="#">
                                    <Icon icon="ant-design:linkedin-outlined" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:instagram" />
                                </a>
                                <a href="#">
                                <Icon icon="fe:facebook" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}