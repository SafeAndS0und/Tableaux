import React, {useState} from 'react'
import styles from './Filter.module.scss'
import {FaAngleDoubleDown} from 'react-icons/fa'
import Fade from '../../assets/transitions/Fade'
import {useSelector} from 'react-redux'

export default () =>{

   const currFilter = useSelector(state => state.filter)

   const [filterExpanded, toggleFilterExpanded] = useState(false)

   const f = {
      categories: ['fashion', 'nature', 'backgrounds', 'science', 'education', 'people',
         'feelings', 'religion', 'health', 'places', 'animals', 'industry', 'food', 'computer'],
      colors: ["red", "orange", "yellow", "green", "turquoise",
         "blue", "lilac", "pink", "white", "gray", "black", "brown"],
      styles: ["all", "photo", "illustration", "vector"],
      order: ["popular", "latest"]
   }

   const [filters, setFilters] = useState(f)


   const handleClick = e => {

   }

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
                     {filters.categories.map(category => <span onClick={handleClick}>{category} </span>)}
                  </div>
               </article>

               <article className={styles["by-color"]}>

                  <section>
                     <h3>By color</h3>
                     <div>
                        {
                           filters.colors.map(color =>
                              <span style={{backgroundColor: color}} className={styles.color}></span>
                           )}
                     </div>
                  </section>

                  <section>
                     <h3>By size</h3>
                     <div>
                        <input type="text" placeholder="Minimal Width"/>
                        <input type="text" placeholder="Maximal Width"/>
                     </div>
                  </section>

               </article>

               <article>
                  <h3>By style</h3>
                  <div>
                     {
                        filters.styles.map(style =>
                           <span>{style}</span>
                        )}
                  </div>
               </article>

               <article>
                  <h3>Sort by</h3>
                  <div>
                     {
                        filters.order.map(orderType =>
                           <span>{orderType}</span>
                        )}
                  </div>
               </article>

            </div>
         </Fade>

      </section>
   )

}

