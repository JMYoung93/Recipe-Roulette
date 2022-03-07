// 
const express = require('express');
const mongodb = require('mongodb').MongoClient; 
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

// 
const {  typeDefs, resolvers } = require('./schemas');
//Import `authMiddleware()` function to be configured with the Apollo Server 
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');


// 
const PORT =process.env.PORT || 5000;
const app = express();

// 
async function startServy() { 
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        //Add context to server so `authMiddleware()` function can pass data to resolver function
        context: authMiddleware,
    });

    await server.start()

    server.applyMiddleware({ app });
}

startServy()


// 
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// can change name 'production' to something else if needed
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

// 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}`);
    })
})