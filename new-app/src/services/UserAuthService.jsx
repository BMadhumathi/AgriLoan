import axios from'axios';

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth/";

class UserAuthService{
    saveUser(user) {
        return axios.post(AUTH_API_BASE_URL + "register", user);
    }
      
    loginUserWithEmailAndPassword(user) {
        return axios.post(AUTH_API_BASE_URL + "authenticate", user);
    }
    
}
 
export default new UserAuthService();