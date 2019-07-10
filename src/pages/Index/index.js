import React from 'react'
import Filter from '../../components/Filter/Filter'
import styles from './index.module.scss'
import Images from '../../components/Images/Images'

export default props => {

   return (
      <div className={styles.content}>
         <Filter />
         <Images />
      </div>
   )
}