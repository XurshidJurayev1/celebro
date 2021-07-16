import axios from 'axios'
export default axios.create(
    {
        baseURL: 'https://data-celebro-default-rtdb.firebaseio.com/'
    }
)