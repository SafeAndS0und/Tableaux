import React, {useState, useEffect} from 'react'
import styles from './Favorites.module.scss'

export default props => {

   const [favorites, setFavorites] = useState([])

   useEffect(() => {
      setFavorites(JSON.parse(localStorage.getItem('favorites')))

   }, [])
   return (
      <div className={styles.favorites}>
         {favorites.map(url => <img src={url} alt="one of favorites images"/>)}
      </div>
   )
}