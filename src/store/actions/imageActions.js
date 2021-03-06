import axios from 'axios'

const urlBase = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`

export const fetchById = id =>{

   return (dispatch, state) =>{
      axios.get(`${urlBase}&id=${id}`)
         .then(({data}) => dispatch(fetchByIdSuccess(data.hits[0])))
         .catch(err => console.log(err))
   }
}

const fetchByIdSuccess = (image) => ({
   type: "FETCH_BY_ID_SUCCESS",
   payload: {image}
})

export const fetchImages = (options) =>{

   return (dispatch, state) =>{
      dispatch(fetchImagesBegin(options.query, options.limit))

      const {byCategory, byColors, bySize, byImageType, order} = state()['filter']
      const filterOptions = `image_type=${byImageType}&order=${order}&category=${byCategory}
      &colors=${byColors}&page=${options.page}&min_width=${bySize.width}&min_height=${bySize.height}`

      axios.get(`${urlBase}&q=${options.query}&per_page=${options.limit}&${filterOptions}`)
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

// --------------------- //

export const changeQuery = (query) => ({
   type: "CHANGE_QUERY",
   payload: {query}
})

export const clearImages = () => ({
   type: "CLEAR_IMAGES"
})

export const changePage = page => ({
   type: "CHANGE_PAGE",
   payload: {page}
})