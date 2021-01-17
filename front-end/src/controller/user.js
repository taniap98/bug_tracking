import { EventEmitter } from 'fbemitter'
import axios from 'axios'

const SERVER = "http://localhost:8080/api"

class User{
    constructor() {
        this.users = []
        this.user=null
        this.emitter = new EventEmitter()
    }

    async login(user){
        return axios
        .post(`${SERVER}/login`, {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem("'userId", res.data.logedInUser);
            console.log(res.data.logedInUser);
            return res.data;
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default User;