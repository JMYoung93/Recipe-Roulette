const jwt = require('jsonwebtoken');

const secret = 'secret';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        //allows token to be sent with req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        //Split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        // if token can be verified, add the decoded user's data to the request so resolver can access the data
        try {
            const { data } = jqt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
        //return the request objct so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function ({ email, name, _id }) {
        const payload = { email, name, _id };
        return jwt.sign ({ data: payload }, secret, { expiresIn: expiration });
    },
};