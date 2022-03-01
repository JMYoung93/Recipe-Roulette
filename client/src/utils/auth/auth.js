import decode from 'jwt-decode';

class Auth {
    login(token) {
        localStorage.setItem('token', token);
        window.location.assign('/');
      }
}

export default new Auth();