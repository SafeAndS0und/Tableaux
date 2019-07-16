import React, {useState} from 'react'
import styles from './Filter.module.scss'
import {FaAngleDoubleDown} from 'react-icons/fa'
import Fade from '../../assets/transitions/Fade'
import {useSelector, useDispatch} from 'react-redux'
import {fetchImages} from "../../store/actions/imageActions"
import {updateFilter} from "../../store/actions/filterActions"


export default () =>{

   const currFilter = useSelector(state => state.filter)
   const query = useSelector(state => state.image.query)
   const dispatch = useDispatch()

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


   const handleClick = (e, prop) => {
      // e.target.className += styles["filter-active"]
      dispatch(updateFilter(prop, e.target.innerText.trim()))
      dispatch(fetchImages(query))
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
                     {filters.categories.map(category => <span onClick={e => handleClick(e, 'byCategory')}>{category} </span>)}
                  </div>
               </article>

               <article className={styles["by-color"]}>

                  <section>
                     <h3>By color</h3>
                     <div>
                        {
                           filters.colors.map(color =>
                              <span style={{backgroundColor: color}}
                                    onClick={e => handleClick(e, 'byColors')}
                                    className={styles.color}>
                                 {color}
                              </span>
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
                           <span onClick={e => handleClick(e, 'byImageType')}>{style}</span>
                        )}
                  </div>
               </article>

               <article>
                  <h3>Sort by</h3>
                  <div>
                     {
                        filters.order.map(orderType =>
                           <span onClick={e => handleClick(e, 'order')}>{orderType}</span>
                        )}
                  </div>
               </article>

            </div>
         </Fade>

      </section>
   )

}

