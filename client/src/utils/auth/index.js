import decode from 'jwt-decode';

class Auth {
    login(idToken) {
        localStorage.setItem('idToken', idToken);
        window.location.assign('/');
      }
}

export default new Auth();