import Image from "next/image"
import HomeBtn from "../HomeBtn/page"
import styles from "./page.module.css"

export default function HomeProds({image, bottleSize, productDesc}) {



    return (
        <>

            <div className="col-3 d-flex align-items-center justify-content-center my-2" >
                <Image src={image} alt={bottleSize} loading="lazy"className="rounded" width={250} height={250} data-aos="fade-right" />
            </div>
            <div className={styles.proContain + " col-9 d-flex flex-column justify-content-center"}>
                <p className={styles.mlBadge + " badge rounded-pill text-bg-primary px-3"} data-aos="slide-up">{bottleSize}ml</p>
                <p className={styles.helpTextThirdSection12 + " mt-3  px-1"} data-aos="fade-left" >
                    {productDesc}
                </p>
            </div>

        </>

    )

}