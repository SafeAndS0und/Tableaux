import React from 'react'
import './App.css'
import MainLayout from '../../layouts/Main/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Index from '../../pages/Index/index'
import Favorites from '../../pages/Favorites/Favorites'


export default () => {
   return (
      <div className="App">
         <BrowserRouter>
            <MainLayout>

               <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/favorites" component={Favorites}/>
               </Switch>

            </MainLayout>
         </BrowserRouter>
      </div>
   )
}

