// 
const express = require('express');
const mongodb = require('mongodb').MongoClient; 
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

// 
const {  typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


// 
const PORT =process.env.PORT || 3001;
const app = express();

// 
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
//TODO: Complete middleware post request logic 
server.applyMiddleware({ app });

// 
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// can change name 'production' to something else if needed
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/public/index.html')));
// }

// 
app.get('*', (req, res) => {
    res,sendFile(path.join(__dirname, '../client/public/index.html'));
})

// 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})