import React, {useEffect} from 'react'
import './App.css'
import MainLayout from '../../layouts/Main/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from '../../pages/Index/index'
import Favorites from '../../pages/Favorites/Favorites'
import Image from '../../pages/Image/Image'
import {fetchImages} from "../../store/actions/imageActions"
import {useDispatch} from 'react-redux'

export default () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchImages({query: "nature", limit: 20, page: 1}))
   }, [])

   return (
      <div className="App">
         {/* basename="/Tableaux" */}
         <BrowserRouter basename="/Tableaux">
            <MainLayout>

               <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/favorites" component={Favorites}/>
                  <Route path="/:img_ID" component={Image}/>
               </Switch>

            </MainLayout>
         </BrowserRouter>
      </div>
   )
}

