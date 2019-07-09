import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default ({children}) =>{
   return (
      <div className="layout">
         <Navbar/>
         {children}
      </div>
   )
}