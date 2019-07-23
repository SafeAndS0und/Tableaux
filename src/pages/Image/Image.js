import React, {useState, useEffect} from 'react'
import styles from './Image.module.scss'
import {MdFileDownload, MdThumbUp, MdRemoveRedEye, MdAddBox} from 'react-icons/md'
import {fetchById} from "../../store/actions/imageActions"
import {useDispatch, useSelector} from 'react-redux'

const Image = props =>{

   const images = useSelector(state => state.image.images)
   const dispatch = useDispatch()
   const [hasNoProfileImage, setHasNoProfileImage] = useState(false)


   const imgFromStore = images.find(img => img.id.toString() === props.match.params.img_ID)
   const imgFromFetch = useSelector(state => state.image.image)

   // If the image is not in store, fetch id individually
   const id = props.match.params.img_ID
   useEffect(() =>{
      if(!imgFromStore){
         dispatch(fetchById(id))
      }
   }, [])

   const img = imgFromStore || imgFromFetch

   const addToStorage = img =>{
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []
      favorites.push(img)
      // removing duplicates
      const unique =
         Array
            .from(new Set(favorites.map(a => a.id)))
            .map(id =>{
               return favorites.find(a => a.id === id)
            })

      localStorage.setItem('favorites', JSON.stringify(unique))
   }

   return (
      img ? (<div className={styles.content}>
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
                  <h3 className={styles.favorites} onClick={() => addToStorage(img)}>
                     Add to favorites
                     <MdAddBox/>
                  </h3>

                  <a download="filename.jpg" target="_blank" href={img.largeImageURL}>
                     Download Picture
                     <MdFileDownload/>
                  </a>
               </div>

            </section>
         </div>)
         : null
   )
}

export default Image