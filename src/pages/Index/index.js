import React from 'react'
import Filter from '../../components/Filter/Filter'
import styles from './index.module.scss'
import Images from '../../components/Images/Images'
import {useSelector} from "react-redux"

export default props => {
   const {images, loading, query} = useSelector(state => state.image)

   return (
      <div className={styles.content}>
         <Filter />
         <Images images={images} loading={loading} query={query}/>
      </div>
   )
}