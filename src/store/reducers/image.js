
const initalState = {
   images: [],
   loading: false,
   query: 'nature',
   limit: 18,
   image: null
}

export default (state = initalState, action) => {

   switch(action.type){

      case "FETCH_BY_ID_SUCCESS" :
         return {
            ...state,
            image: action.payload.image
         }

      case "FETCH_IMAGES_BEGIN" :
         return {
            ...state,
            loading: true,
            query: action.payload.query,
            limit: action.payload.limit
         }

      case "FETCH_IMAGES_SUCCESS" :
         return {
            ...state,
            images: action.payload.images,
            loading: false
         }

      case "CHANGE_QUERY" :
         return {
            ...state,
            query: action.payload.query
         }

      default:
         return state

   }
}