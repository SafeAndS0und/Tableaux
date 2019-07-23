import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import styles from './Navbar.module.scss'
import {GoMarkGithub, GoSearch} from 'react-icons/go'
import {useDispatch} from 'react-redux'
import {changeQuery} from "../../store/actions/imageActions"
import {fetchImages} from "../../store/actions/imageActions"



const Navbar = ({  history }) =>{

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
         dispatch(changeQuery(query))
         dispatch(fetchImages(query))
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

            <div className={styles.language}>ENG</div>

            <GoMarkGithub className={styles.github}/>
         </section>
      </nav>
   )
}

export default withRouter(Navbar)