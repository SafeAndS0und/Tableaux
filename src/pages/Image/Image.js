import React, {useState} from 'react'
import {connect} from 'react-redux'
import styles from './Image.module.scss'
import {MdFileDownload, MdThumbUp, MdRemoveRedEye, MdAddBox} from 'react-icons/md'

const Image = props =>{

   const [hasNoProfileImage, setHasNoProfileImage] = useState(false)

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
               <p>{img.tags}</p>
            </div>
         </section>

         <section className={styles.right}>

            <div className={styles.author}>
               <h3>By {img.user}</h3>

               {
                  hasNoProfileImage
                     ? null
                     : <img src={img.userImageURL} alt="userImage" onError={() => setHasNoProfileImage(true)}/>
               }
            </div>

            <div className={styles.buttons}>
               <h3 className={styles.favorites}>
                  Add to favorites
                  <MdAddBox/>
               </h3>

               <a download="filename.jpg" target="_blank" href={img.largeImageURL}>
                  Download Picture
                  <MdFileDownload/>
               </a>
            </div>

         </section>
      </div>
   )
}

const mapStateToProps = (state) => ({
   images: state.image.images
})

export default connect(mapStateToProps)(Image)