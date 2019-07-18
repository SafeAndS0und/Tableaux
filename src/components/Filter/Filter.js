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

   const [filters] = useState(f)


   const handleClick = (e, prop, isStatic) => {
      if(!isStatic) dispatch(updateFilter(prop, e.target.innerText.trim()))
      else dispatch(updateFilter(prop, ''))

      // find which article are we in
      const className = e.target.parentElement.parentElement.className
      const article = document.querySelector('.' + (className ? className : styles["by-color"]))

      // different node tree for .by-color than other elements, need to check for that first
      const children = article.className !== styles["by-color"]
         ? article.children[1].children
         : article.children[0].children[1].children

      // remove all .active class occurrences
      Array.from(children).forEach(el => el.classList.remove(styles.active))

      //add to the clicked element .active class
      e.target.classList.add(styles.active)
   }
   return (
      <section className={styles.filter}>

         <h2 onClick={() => toggleFilterExpanded(!filterExpanded)}>
            Filter searched images

            <FaAngleDoubleDown className={filterExpanded ? styles.upsidedown : null}/>

         </h2>

         <Fade toggle={filterExpanded}>
            <div>
               <button onClick={() => dispatch(fetchImages(query))}>Change the filters</button>

               <article className={styles["by-category"]}>
                  <h3>By category</h3>
                  <div>
                     <span onClick={e => handleClick(e, 'byCategory', true)}>all</span>
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
                        <span onClick={e => handleClick(e, 'byCategory', true)}> all</span>
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

               <article className={styles["by-style"]}>
                  <h3>By style</h3>
                  <div>
                     {
                        filters.styles.map(style =>
                           <span onClick={e => handleClick(e, 'byImageType')}>{style}</span>
                        )}
                  </div>
               </article>

               <article className={styles["order"]}>
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

