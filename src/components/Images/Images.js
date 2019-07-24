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
                  !loading || images.length > 0 ? images.map(img => <Image key={img.id} img={img}/>) : null
               }
            </div>
         </Fade>

      </section>
   )
}

