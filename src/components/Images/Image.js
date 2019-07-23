import React, {useState} from 'react'
import styles from './Image.module.scss'
import {withRouter} from 'react-router-dom'
import {MdThumbUp, MdRemoveRedEye} from 'react-icons/md'
import Fade from '../../assets/transitions/Fade'

function Image({img, history}){

   const [showCover, toggleShowCover] = useState(false)
   const [wideEnough, setWideEnough] = useState(document.documentElement.clientWidth > 1000)

   const proportion = img.imageWidth / img.imageHeight

   // determine if the screen is wide enough to display 2 columns
   window.addEventListener('resize', () =>{
      document.documentElement.clientWidth < 1000
         ? setWideEnough(false)
         : setWideEnough(true)
   })


   const inlineStyle = {
      gridColumn: (proportion > 1.7 && wideEnough) && "span 2"
   }

   return (

      <article className={styles.image}
               style={inlineStyle}
               onClick={() => history.push(`/${img.id}`)}
               onMouseOver={e => toggleShowCover(true)}
               onMouseOut={e => toggleShowCover(false)}
      >
         <img src={img.largeImageURL} alt="doggy"/>
         {
            (
               <Fade toggle={showCover}>
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
                           <span>{img.views} <MdRemoveRedEye/></span>
                           <span>{img.likes} <MdThumbUp/></span>
                        </div>

                     </div>

                  </div>
               </Fade>
            )

         }
      </article>
   )
}


export default withRouter(Image)