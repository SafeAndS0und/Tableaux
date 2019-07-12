import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import {Provider} from 'react-redux'
import store from './store/store'
import {fetchImages} from "./store/actions/imageActions"

store.dispatch(fetchImages())

ReactDOM.render(
   <Provider store={store}> <App /> </Provider>,
   document.getElementById('root')
)

