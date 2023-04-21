import Image from "next/image"
import styles from './page.module.css'
import left from '../../public/images/undraw-contact.svg'
export default function Contact() {
    return (
        <>

            <div className={styles.content + " "}>
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">


                            <div className="row justify-content-center">
                                <div className="col-md-6">

                                    <h3 className={styles.heading + " mb-4"}>Let us talk about water!</h3>
                                    <p>At Ayzill, we are dedicated to providing you with the best possible drinking water experience. Whether you have a question, concern, or feedback, we would love to hear from you.</p>

                                    <p><Image src={left} alt="Image" className="img-fluid" /></p>


                                </div>
                                <div className="col-md-6">

                                    <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                        <div className="row">
                                            <div className="col-md-12 form-group my-2">
                                                <h5 className={styles.heading1 + " mb-2"}>Name</h5>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group my-2">
                                                <h5 className={styles.heading1 + " mb-2"}>Email</h5>

                                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group my-2">
                                                <h5 className={styles.heading1 + " mb-2"}>Subject</h5>
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group my-2">
                                                <h5 className={styles.heading1 + " mb-2"}>Message</h5>

                                                <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 my-2">
                                                <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                                                <span className={styles.submitting + " "}></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class={styles.contact_info + " "}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">
                                <div class={styles.contact_info_container + " d-flex flex-lg-row flex-column justify-content-between align-items-between"}>
                                    <div class={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                        <div class={styles.contact_info_image + " "}><Image className={styles.img} src="https://img.icons8.com/office/24/000000/iphone.png" alt="" width={70} height={35}/></div>
                                        <div class={styles.contact_info_content + " "}>
                                            <div class={styles.contact_info_title + " "}>Phone</div>
                                            <div class={styles.contact_info_text+" "}>+91 93269 84350</div>
                                        </div>
                                    </div>

                                    <div class={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                        <div class={styles.contact_info_image + " "}><Image className={styles.img} src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" width={70} height={35}/></div>
                                        <div class={styles.contact_info_content + " "}>
                                            <div class={styles.contact_info_title + " "}>Email</div>
                                            <div class={styles.contact_info_text +" "}>info@ayzill.in</div>
                                        </div>
                                    </div>

                                    <div class={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                        <div class={styles.contact_info_image + " "}><Image className={styles.img} src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" width={50} height={35}/></div>
                                        <div class={styles.contact_info_content + " "}>
                                            <div class={styles.contact_info_title + " "}>Address</div>
                                            <div class={styles.contact_info_text +" "}>Industrial Gala, Plot 86 B, Charkop, Mumbai 400067</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="container">
                        <h3 className={styles.heading + " mb-4 mt-5"}>Find us at:</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7768150543993!2d72.82510797496995!3d19.204948047912193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d597218237%3A0x9bd6b73f82ba7ea7!2sRanco%20Energy%20%26%20Projects%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1681893550760!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className={styles.map + " "} referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>

        </>
    )
}