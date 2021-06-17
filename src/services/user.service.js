import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios
        .get(API_URL + 'all');
    }

    getUserBoard() {
        return axios
        .get(API_URL + 'user', {
            hearders: authHeader()
        });
    }

    getModeratorBoard() {
        return axios
        .get(API_URL + 'mod', {
            hearders: authHeader()
        });
    }

    getAdminBoard() {
        return axios
        .get(API_URL + 'admin', {
            hearders: authHeader()
        });
    }
}

export default new UserService();