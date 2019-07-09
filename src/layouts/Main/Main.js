import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default ({children}) =>{
   return (
      <div className="layout">
         <Navbar/>

         <div className="layout-children">
            {children}
         </div>
      </div>
   )
}