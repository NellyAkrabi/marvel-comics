
import axios from "axios"

const API_KEY = 'a5837db97d72016c81a7a776f4240db9';
const url = "https://gateway.marvel.com/v1/public/stories"

axios.get(url, {
    params: {
        apikey: API_KEY
    }
})
    .then(result => console.log(result.data))
    .catch(error => console.log(error.massage))