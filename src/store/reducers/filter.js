const initialState = {
   byCategory: '',
   byColors: '',
   bySize: {
      width: 0,
      height: 0
   },
   byImageType: 'all',
   order: 'popular'

}

export default (state = initialState, action) =>{

   switch(action.type){

      case "UPDATE_FILTER" :
         return {
            ...state,
            [action.payload.prop]: action.payload.value
         }

      case "UPDATE_FILTER_BY_SIZE" :
         return {
            ...state,
            bySize: {
               ...state.bySize,
               [action.payload.prop]: action.payload.value
            }
         }

      default :
         return state
   }
}