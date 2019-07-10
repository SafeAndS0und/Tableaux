import React from 'react'
import styles from './Image.module.scss'

export default props => {

   return (
      <article className={styles.image}>

         <img src={props.source} alt="doggy"/>
         <div className={styles.dim}>
         </div>

         <div className={styles.details}>
            <div className={styles.info}>
               <p>By DoggyLover69</p>
               <span> dog cute animal close-up </span>
            </div>

            <div className={styles.stats}>
               <span>9420 views</span>
               <span>142 likes</span>
            </div>
         </div>

      </article>
   )
}
