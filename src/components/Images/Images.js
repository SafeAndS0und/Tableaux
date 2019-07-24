import React from 'react'
import Image from './Image'
import styles from './Images.module.scss'
import Fade from '../../assets/transitions/Fade'

export default ({images, loading, query}) =>{


   return (
      <section className={styles.images}>

         {query ? <h2> {`Images related to "${query}"`} </h2> : null}

         <Fade toggle={!loading || images.length > 0}>
            <div className={styles["images-container"]}>
               {
                  !loading || images.length > 0 ? images.map(img => <Image key={img.id} img={img}/>)
                     : <span className={styles['load-msg']}>
                        Loading... If it's loading too long maybe my API limit is exceeded. Please try again in a few minutes :(
                     </span>

               }
            </div>
         </Fade>

      </section>
   )
}

