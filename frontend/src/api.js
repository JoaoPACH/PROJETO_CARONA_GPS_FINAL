//import axios from "axios"

const svurl = "https://projetocarona2.tunnel.monday.app"

const axios = require('axios').default

var headers = {}

var api = {
    post: async function(route, data){
        var res = await axios.post(svurl+route, data, {headers: headers})
        if(res.headers['set-cookie']){
            headers['Cookie'] = res.headers['set-cookie'][0]
        }
        return res
    },
    get: async function(route){
        return await axios.get(svurl+route, {headers: headers})
    }
}

//export default api;
module.exports = api

/*api.post("/api/users/", {
    "firstName": "Miguel",
    "lastName": "Mazetto",
    "email": "miguelmazetto@gmail.com",
    "telefone": "(14) 998819774",
    "password": "test"
}).then(async (res) => {
    console.log("Done!", res.data)*/

    // res example:
    /*{
        status: 200,
        statusText: 'OK',
        headers: AxiosHeaders {
          server: 'nginx/1.23.1',
          date: 'Tue, 20 Jun 2023 19:19:50 GMT',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '183',
          connection: 'close',
          'x-powered-by': 'Express',
          'set-cookie': [ 'session-token=436ae3b1-307d-4200-82eb-2f26785fe426' ],
          etag: 'W/"b7-A8DxZNNyQPFinCkqHByCU4FXuDE"'
        },
        data: {
          firstName: 'Miguel',
          lastName: 'Mazetto',
          email: 'miguelmazetto@gmail.com',
          telefone: '(14) 998819774',
          updatedAt: '2023-06-20T19:19:49.871Z',
          createdAt: '2023-06-20T19:19:49.871Z'
        }
      }*/

/*    res = await api.get("/api/users/")
    console.log("GetDone:", res.data)
    
}).catch((err) => {
    console.error("Error:", err)
})*/

