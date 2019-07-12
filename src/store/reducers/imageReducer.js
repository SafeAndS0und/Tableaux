
const initalState = {
   images: [],
   loading: false
}

export default function(state = initalState, action){

   switch(action.type){

      case "FETCH_IMAGES_BEGIN" :
         return {
            ...state,
            loading: true
         }

      case "FETCH_IMAGES_SUCCESS" :
         return {
            ...state,
            images: action.payload.images,
            loading: false
         }

      default:
         return state

   }
}