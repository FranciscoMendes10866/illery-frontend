
import axios from 'axios'
import store from '../store/index'

export default () => {
  return axios.create({
    baseURL: store.state.baseURL,
    timeout: 5000
  })
}
