import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import styles from './Navbar.module.scss'
import {GoMarkGithub, GoSearch} from 'react-icons/go'
import {useDispatch} from 'react-redux'
import {changeQuery, fetchImages, clearImages, changePage} from "../../store/actions/imageActions"
import logo from './logo_pixa.png'


const Navbar = ({history}) =>{

   const [query, setQuery] = useState('')
   const [isSearching, setSearching] = useState(false)
   const [scrollY, setScrollY] = useState(0)

   const dispatch = useDispatch()

   useEffect(() =>{
      window.addEventListener('scroll', () =>{
         setScrollY(window.scrollY)
      })
   })

   const keyUpHandler = e =>{
      if(e.key === 'Enter'){
         dispatch(clearImages())
         dispatch(changePage(1))
         dispatch(changeQuery(query))
         dispatch(fetchImages({query, page: 1, limit: 20}))
         history.push('/')
      }
      else{
         setQuery(e.target.value)
      }
   }


   return (
      <nav className={scrollY > 50 ? styles.withBg : null}>

         <section className={styles.brand}>
            <NavLink to="/">Tableaux</NavLink>
            <a href="https://pixabay.com" target="_blank">
               <img src={logo} alt="Pixabay Logo" className={styles.logo}/>
            </a>
         </section>

         <section className={styles.navigation}>

            <div
               className={[styles.search, isSearching ? styles.searching : null].join(' ')}
               onClick={() => setSearching(!isSearching)}
            >
               <input type="text" placeholder="What do you want to see?"
                      style={{opacity: isSearching ? '1' : '0'}}
                      onClick={e => e.stopPropagation()}
                      onKeyUp={keyUpHandler}

               />
               <GoSearch/>
            </div>

            <NavLink to="/favorites">Favorites</NavLink>

            <a href="https://github.com/SafeAndS0und/Tableaux" target="_blank">
               <GoMarkGithub className={styles.github}/>
            </a>
         </section>
      </nav>
   )
}

export default withRouter(Navbar)