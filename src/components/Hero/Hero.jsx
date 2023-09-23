import React from 'react'
import { getImageUrl } from '../../utils' 
import styles from './Hero.module.css'


export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Anish!</h1>

        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cumque molestiae veniam vitae, hic magni sunt quia reiciendis, iure maxime reprehenderit rem esse eligendi ad iste sit modi voluptas quidem!
        </p>

        <a href="mailto:anishawasthi16@gmail.com" className={styles.contactBtn}>Conatact Me</a>
    </div>

    <img 
    className={styles.heroImg}
    src={getImageUrl("hero/heroImage.png")}
    />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
  );
}
