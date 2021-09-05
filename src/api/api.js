import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.site.ei-kids.com/api'
})

export const gettingApi = {
    getNews(){
        return instance.get('/news/list')
        .then(responce => responce.data.data)
    },
    getProducts(){
        return instance.get('/products/list')
        .then(responce => responce.data.data)
    }
}