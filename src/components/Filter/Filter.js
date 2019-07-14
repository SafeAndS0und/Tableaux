import React, {useState} from 'react'
import styles from './Filter.module.scss'
import {FaAngleDoubleDown} from 'react-icons/fa'
import Fade from '../../assets/transitions/Fade'

export default () =>{

   const [filterExpanded, toggleFilterExpanded] = useState(false)

   const f = {
      categories: ['fashion', 'nature', 'backgrounds', 'science', 'education', 'people',
         'feelings', 'religion', 'health', 'places', 'animals', 'industry', 'food', 'computer'],
      colors: ["red", "orange", "yellow", "green", "turquoise",
         "blue", "lilac", "pink", "white", "gray", "black", "brown"],
      styles: ["photo", "illustration", "vector"]
   }

   const [filters, setFilters] = useState(f)

   return (
      <section className={styles.filter}>

         <h2 onClick={() => toggleFilterExpanded(!filterExpanded)}>
            Filter searched images

            <FaAngleDoubleDown className={filterExpanded ? styles.upsidedown : null}/>

         </h2>

         <Fade toggle={filterExpanded}>
            <div>
               <article>
                  <h3>By category</h3>
                  <div>
                     {filters.categories.map(category => <span>{category} </span>)}
                  </div>
               </article>
               <article>
                  <h3>By color</h3>
                  <div>
                     {
                        filters.colors.map(color =>
                              <span style={{backgroundColor: color}} className={styles.color}>
                              </span>
                        )}
                  </div>
               </article>
               <article>
                  <h3>By style</h3>
                  <div>
                     {
                        filters.styles.map(style=>
                           <span>{style}</span>
                        )}
                  </div>
               </article>
               <article>
                  <h3>Sort by</h3>
                  <div>
                     <p>Popular Latest</p>
                  </div>
               </article>
            </div>
         </Fade>

      </section>
   )

}