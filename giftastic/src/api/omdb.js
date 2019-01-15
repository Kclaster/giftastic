import axios from 'axios'

const key = 'fcc96c64'
export default axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${key}&`
})