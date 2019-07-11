import React, {useState} from 'react'
import styles from './Image.module.scss'

export default props =>{

   const [showCover, toggleShowCover] = useState(false)

   return (
      <article className={styles.image}
               onMouseOver={e => toggleShowCover(true)}
               onMouseOut={e => toggleShowCover(false)}
      >

         <img src={props.source} alt="doggy" />
         {

                (
                  <div className={[styles.cover, showCover ? null : styles.hidden].join(' ')}>

                     <div className={styles.dim}>
                     </div>

                     <div className={styles.details}>

                        <div className={styles.info}>
                           <p>By
                              <span> DoggyLover69</span>
                           </p>
                           <span> dog cute animal close-up </span>
                        </div>

                        <div className={styles.stats}>
                           <span>9420 views</span>
                           <span>142 likes</span>
                        </div>

                     </div>

                  </div>
               )

         }
      </article>
   )
}
