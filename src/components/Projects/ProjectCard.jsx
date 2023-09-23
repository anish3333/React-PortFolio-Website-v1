import React from 'react'
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils';

export const ProjectCard = ({project}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(project.imageSrc)} 
        className={styles.image}
        alt="" />
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.skills}>
            {
                project.skills.map((skill, id)=>{
                    return<li key={id} className={styles.skill}>{skill}</li>
                })
            }
        </ul>
        <div className={styles.links}>
            <a href={project.demo} className={styles.link}>Demo</a>
            <a href={project.source} className={styles.link}>Source</a>
        </div>
    </div>
  );
}
