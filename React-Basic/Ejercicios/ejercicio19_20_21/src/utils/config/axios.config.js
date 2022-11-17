import axios from 'axios'

//default config for Axios

export default axios.create(
    {
        baseURL:'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
    }
)