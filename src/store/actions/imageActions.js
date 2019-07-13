import axios from 'axios'

export const fetchImages = (query = 'nature', limit = 18 ) => {
   return (dispatch, state) => {

      dispatch(fetchImagesBegin(query, limit))

      const {byCategory, byColors, bySize, byImageType, order} = state()['filter']
      const urlBase = 'https://pixabay.com/api/?key=13020972-7188b3caf1136e1d9e80cd75a'
      const filterOptions = `image_type=${byImageType}&order=${order}&category=${byCategory}&colors=${byColors}`

      axios.get(`${urlBase}&q=${query}&per_page=${limit}&${filterOptions}`)
         .then(res => dispatch(fetchImagesSuccess(res.data.hits)))
         .catch(err => console.log(err))
   }
}

const fetchImagesBegin = (query, limit) => ({
   type: "FETCH_IMAGES_BEGIN",
   payload: {query, limit}
})

const fetchImagesSuccess = (images) => ({
   type: "FETCH_IMAGES_SUCCESS",
   payload: {images}
})