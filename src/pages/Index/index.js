import React, {useEffect} from 'react'
import Filter from '../../components/Filter/Filter'
import styles from './index.module.scss'
import Images from '../../components/Images/Images'
import {useSelector, useDispatch} from "react-redux"
import {fetchImages} from "../../store/actions/imageActions"

export default props => {

   const dispatch = useDispatch()
   const image = useSelector(state => state.image)

   // Infinite scroll (actually not infinite)
   let height
   let scrollY
   let windowSize = document.documentElement.clientHeight

   let canIFetch = true



   function handleScroll() {
      scrollY = window.pageYOffset
      height = document.documentElement.scrollHeight
      console.log(image.query)

      if(height - (scrollY + windowSize) <= 150) {
         if(canIFetch) dispatch(fetchImages({query: image.query, page:   Math.floor(Math.random() *10 ), limit: 20}))
         canIFetch = false

         setTimeout(() => canIFetch = true, 1000)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   })


   return (
      <div className={styles.content}>
         <Filter />
         <Images images={image.images} loading={image.loading} query={image.query}/>
      </div>
   )

}