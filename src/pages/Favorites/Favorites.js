import React, {useState, useEffect} from 'react'
import styles from './Favorites.module.scss'
import Images from '../../components/Images/Images'

export default props => {

   const [favorites, setFavorites] = useState([])

   useEffect(() => {
      setFavorites(JSON.parse(localStorage.getItem('favorites')))

   }, [])
   return (
      <div className={styles.favorites}>
         <Images images={favorites}/>
      </div>
   )
}