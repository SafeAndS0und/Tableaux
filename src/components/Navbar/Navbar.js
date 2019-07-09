import React from 'react'
import {NavLink} from 'react-router-dom'

export default props => {

   return (
      <div className="indexPage">
         <NavLink to="/">Tableaux </NavLink>
         <NavLink to="/favorites"> Favorites</NavLink>
      </div>
   )
}