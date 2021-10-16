import axios from 'axios'

const client = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE
  baseURL: 'http://localhost:5000/api'
  // baseURL: 'http://dev.cargoroo.eu/v1'
})

export default client
