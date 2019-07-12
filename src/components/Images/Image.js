import React, {useState} from 'react'
import styles from './Image.module.scss'
import { withRouter } from 'react-router-dom'

function Image({img, history}){

   const [showCover, toggleShowCover] = useState(false)

   return (
      <article className={styles.image}
               onClick={() => history.push(`/${img.id}`)}
               onMouseOver={e => toggleShowCover(true)}
               onMouseOut={e => toggleShowCover(false)}
      >

         <img src={img.largeImageURL} alt="doggy" />
         {
                (
                  <div className={[styles.cover, showCover ? null : styles.hidden].join(' ')}>

                     <div className={styles.dim}>
                     </div>

                     <div className={styles.details}>

                        <div className={styles.info}>
                           <p>By
                              <span> {img.user}</span>
                           </p>
                           <span>{img.tags}</span>
                        </div>

                        <div className={styles.stats}>
                           <span>{img.views} views</span>
                           <span>{img.likes} likes</span>
                        </div>

                     </div>

                  </div>
               )

         }
      </article>
   )
}


export default withRouter(Image)