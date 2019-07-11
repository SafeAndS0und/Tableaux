import React, {useState} from 'react'
import styles from './Filter.module.scss'
import {FaAngleDoubleDown} from 'react-icons/fa'
import {CSSTransition} from 'react-transition-group'
import fade from '../../assets/css/transitions/fade.module.css'

export default () =>{

   const [filterExpanded, toggleFilterExpanded] = useState(false)

   return (
      <section className={styles.filter}>

         <h2 onClick={() => toggleFilterExpanded(!filterExpanded)}>
            Filter searched images

            <FaAngleDoubleDown className={filterExpanded ? styles.upsidedown : null}/>

         </h2>

         <CSSTransition in={filterExpanded} timeout={500} unmountOnExit classNames={{...fade}}>
            <div>
               <article>
                  <h3>By category</h3>
                  <p>
                     fashion, nature, backgrounds, science, education, people, feelings, religion, health, places,
                     animals, industry, food, computer
                  </p>
               </article>
               <article>
                  <h3>By color</h3>
                  <p>
                     blue red yellow green black white
                  </p>
               </article>
            </div>
         </CSSTransition>

      </section>
   )

}