import { FC } from "react";
import styles from './ReactComponent.module.css';
import Image from "next/image";
import thumbnail from '../assets/thumnail.png'



type Props =  {

}


export const Card : FC<Props> = () => {
    return (
        <>
        <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.cardtop}>
            <div className={styles.thumbnailDiv}>
            <Image height={30} width={32} src={thumbnail} alt="" className={styles.image}/>
            </div>
            <div className={styles.h1}>
                <div className={styles.h11}>
                <h1>Sarah Dole</h1>
                </div>
            <div className={styles.smallH1}>
                @sarahdole
            </div>
            </div>
        </div>
        <div className={styles.cardbottom}>
             I've been searching for high-quality abstract images for
             my design projects, and I'm thrilled to have found this platform. 
             The variety and depth of creativity are astounding!
        </div>
        </div>
        </div>
        </>
    )
}