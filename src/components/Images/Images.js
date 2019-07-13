import React from 'react'
import Image from './Image'
import styles from './Images.module.scss'
import { connect } from "react-redux";

const Images = ({images, loading, query}) =>{

   return (
      <section className={styles.images}>

         <h2>Images related to "{query}"</h2>

         <div className={styles["images-container"]}>
            {
               !loading ? images.map(img => <Image key={img.id} img={img}/>) : null
            }
         </div>

      </section>
   )
}

const mapStateToProps = state => ({
   query: state.image.query,
   images: state.image.images,
   loading: state.image.loading
})

export default connect(mapStateToProps)(Images)