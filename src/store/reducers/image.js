import uniqBy from 'lodash.uniqby'

const initalState = {
   images: [],
   loading: false,
   page: 1,
   query: 'animals',
   limit: 20,
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
         // const uniqImages =  [...new Set([...state.images, ...action.payload.images].map(item => item))]
         const uniqImages = uniqBy([...state.images, ...action.payload.images], 'id')
         return {
            ...state,
            images: uniqImages,
            loading: false
         }

      case "CHANGE_QUERY" :
         return {
            ...state,
            query: action.payload.query
         }

      case "CLEAR_IMAGES" :
         return {
            ...state,
            images: []
         }

      case "CHANGE_PAGE" :
         return {
            ...state,
            page: action.payload.page
         }

      default:
         return state

   }
}