import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-my-burger-25a7f.firebaseio.com/'
    
})

export default instance