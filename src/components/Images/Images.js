import React from 'react'
import Image from './Image'
import styles from './Images.module.scss'
import {useSelector} from "react-redux"
import Fade from '../../assets/transitions/Fade'

export default () => {

   const {images, loading, query} = useSelector(state => state.image)

   return (
      <section className={styles.images}>

         <h2>Images related to "{query}"</h2>

         <Fade toggle={!loading}>
            <div className={styles["images-container"]}>
               {
                  !loading ? images.map(img => <Image key={img.id} img={img}/>) : null
               }
            </div>
         </Fade>

      </section>
   )
}

