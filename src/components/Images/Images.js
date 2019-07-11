import React from 'react'
import Image from './Image'
import styles from './Images.module.scss'

export default () =>{

   const imgs = [
      'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg',
      'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
      'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg',
      'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186__340.jpg',
      'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg'
   ]

   return (
      <section className={styles.images}>

         <h2>Images related to "dog"</h2>

         <div className={styles["images-container"]}>
            {
               imgs.map(img => <Image key={img} source={img}/>)
            }
         </div>

      </section>
   )
}
