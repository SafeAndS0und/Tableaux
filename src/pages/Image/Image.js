import React from 'react'
import {connect} from 'react-redux'
import styles from './Image.module.scss'

const Image = props =>{

   if(props.images.length === 0) return null

   const img = props.images.find(img => img.id.toString() === props.match.params.img_ID)
   if(!img) return null

   console.log(img)
   return (
      <div className={styles.content}>
         <img src={img.largeImageURL} alt=""/>

         <div>
            <h3>By {img.user}</h3>
            <h4>{img.likes} likes</h4>
            <h4>{img.views} views</h4>
            <span>{img.tags}</span>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   images: state.image.images
})

export default connect(mapStateToProps)(Image)