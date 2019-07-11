import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.scss'
import {GoMarkGithub, GoSearch} from 'react-icons/go'

export default props =>{

   const [isSearching, setSearching] = useState(false)
   const [scrollY, setScrollY] = useState(0)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScrollY(window.scrollY)
      })
   })

   return (
      <nav className={scrollY > 50 ? styles.withBg : null}>

         <section className={styles.brand}>
            <NavLink to="/">Tableaux</NavLink>
         </section>

         <section className={styles.navigation}>

            <div
               className={[styles.search, isSearching ? styles.searching : null].join(' ')}
               onClick={() => setSearching(!isSearching)}
            >
               <input type="text" placeholder="What do you want to see?" style={{
                  opacity: isSearching ? '1' : '0'
               }} onClick={e => e.stopPropagation()}/>
               <GoSearch/>
            </div>

            <NavLink to="/favorites">Favorites</NavLink>

            <div className={styles.language}>ENG</div>

            <GoMarkGithub className={styles.github}/>
         </section>
      </nav>
   )
}