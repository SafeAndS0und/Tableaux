import React from 'react'
import Image from './Image'
import styles from './Images.module.scss'
import { connect } from "react-redux";

const Images = ({images, loading}) =>{

   return (
      <section className={styles.images}>

         <h2>Images related to "dog"</h2>

         <div className={styles["images-container"]}>
            {
               !loading ? images.map(img => <Image key={img.id} img={img}/>) : null
            }
         </div>

      </section>
   )
}

const mapStateToProps = state => ({
   images: state.imageReducer.images,
   loading: state.imageReducer.loading
})

export default connect(mapStateToProps)(Images)