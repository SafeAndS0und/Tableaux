import axios from 'axios'

export const fetchImages = (limit = 8) => {
   return (dispatch, state) => {

      dispatch(fetchImagesBegin())

      axios.get('https://pixabay.com/api/?key=13020972-7188b3caf1136e1d9e80cd75a&q=dogs')
         .then(res => dispatch(fetchImagesSuccess(res.data.hits)))
         .catch(err => console.log(err))
   }
}

const fetchImagesBegin = () => ({
   type: "FETCH_IMAGES_BEGIN"
})

const fetchImagesSuccess = images => ({
   type: "FETCH_IMAGES_SUCCESS",
   payload: {images}
})