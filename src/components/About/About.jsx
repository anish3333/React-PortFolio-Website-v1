import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section id='about' className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            className={styles.aboutImage}
            src={getImageUrl("about/aboutImage.png")}
            />
                <ul className={styles.aboutItems}>
                    
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta quam eveniet nostrum. Soluta enim quidem in natus provident mollitia similique quasi nesciunt, aperiam ad tenetur obcaecati quod reiciendis fugit!</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta quam eveniet nostrum. Soluta enim quidem in natus provident mollitia similique quasi nesciunt, aperiam ad tenetur obcaecati quod reiciendis fugit!</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur soluta quam eveniet nostrum. Soluta enim quidem in natus provident mollitia similique quasi nesciunt, aperiam ad tenetur obcaecati quod reiciendis fugit!</p>
                        </div>
                    </li>

                </ul>
        </div>
    </section>
  )
}
