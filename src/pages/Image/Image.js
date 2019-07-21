import React from 'react'
import {connect} from 'react-redux'
import styles from './Image.module.scss'
import {MdFileDownload, MdThumbUp, MdRemoveRedEye} from 'react-icons/md'

const Image = props =>{

   if(props.images.length === 0) return null

   const img = props.images.find(img => img.id.toString() === props.match.params.img_ID)
   if(!img) return null

   return (
      <div className={styles.content}>
         <section className={styles.left}>
            <img src={img.largeImageURL} alt=""/>

            <div className={styles.numbers}>
               <h4>{img.likes} <MdThumbUp/></h4>
               <h4>{img.views} <MdRemoveRedEye/></h4>
               <h4>{img.downloads} <MdFileDownload/></h4>
            </div>
         </section>

         <section className={styles.right}>
            <div className={styles.author}>
               <h3>By {img.user}</h3>
               <img src={img.userImageURL} alt="userImage"/>
            </div>
            <p>{img.tags}</p>

            <a download="filename.jpg"  href={img.largeImageURL}>
               Click here to get this image
               <MdFileDownload />
            </a>
         </section>
      </div>
   )
}

const mapStateToProps = (state) => ({
   images: state.image.images
})

export default connect(mapStateToProps)(Image)