import {fetchImages} from "../actions/imageActions"

const initalState = {
   images: [],
   status: false
}

export default function(state, action){

   switch(action.type){
      case "FETCH_IMAGES" :
         return {}

      case "FETCH_IMAGES_SUCCESS" :
         return {}
   }
}