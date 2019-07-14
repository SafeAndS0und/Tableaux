import React from 'react'
import {CSSTransition} from 'react-transition-group'
import fade from './fade.module.css'

export default ({children, toggle}) =>{

   return (
      <CSSTransition in={toggle} timeout={500} unmountOnExit classNames={{...fade}}>
         {children}
      </CSSTransition>
   )
}