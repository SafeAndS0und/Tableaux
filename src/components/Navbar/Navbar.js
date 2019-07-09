import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import NavbarStyles from './Navbar.module.scss'
import {GoMarkGithub, GoSearch} from 'react-icons/go'

export default props =>{

   const [isSearching, setSearching] = useState(false)

   return (
      <nav>

         <section className={NavbarStyles.brand}>
            <NavLink to="/">Tableaux</NavLink>
         </section>

         <section className={NavbarStyles.navigation}>

            <div
               className={[NavbarStyles.search, isSearching ? NavbarStyles.searching : null].join(' ')}
               onClick={() => setSearching(!isSearching)}
            >
               <input type="text" placeholder="What do you want to see?" style={{
                  opacity: isSearching ? '1' : '0'
               }} onClick={e => e.stopPropagation()}/>
               <GoSearch/>
            </div>

            <NavLink to="/favorites">Favorites</NavLink>

            <div className={NavbarStyles.language}>ENG</div>

            <GoMarkGithub className={NavbarStyles.github}/>
         </section>
      </nav>
   )
}