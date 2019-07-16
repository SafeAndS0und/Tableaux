
const initialState = {
   byCategory: '',
   byColors: '',
   bySize: {},
   byImageType: 'all',
   order: 'popular'

}

export default (state = initialState, action) => {

   switch(action.type) {

      case "UPDATE_FILTER" :
         return {
            ...state,
            [action.payload.prop]: action.payload.value
         }

      default :
         return state
   }
}