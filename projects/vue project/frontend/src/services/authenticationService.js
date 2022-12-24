import api from '@/services/api';

export default {
    register (credentials) {
        return api().post('register', credentials);
    }
}

// authenticationService.register({
//     email: 'test@gmail.com',
//     password: '1234'
// })