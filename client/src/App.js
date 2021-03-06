import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount'
import Login from './Pages/Login'
import Search from './Pages/Search.js'
import Options from './Pages/Options/index.js';
import { Button } from "./components/Button";
import backgroundVideo from '../src/components/video/cookingbg.mp4'
import Favorite from './Pages/favorites'
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <div className="App">
          <video autoPlay loop muted 
          style={{
            position: 'absolute',
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
          id='video'>
            <source src={backgroundVideo} type='video/mp4'/>
            </video>
          <Header />
          {/* <Route exact path = '/search' component= {Option} /> */}
          <Route exact path = '/' component = {Login}/>
          {/* <Route exact path = '/login' component = {Login}/> */}
          <Route exact path = '/createAccount' component = {CreateAccount}/>
          <Route exact path = '/Options' component = {Options}/>
          <Route exact path = '/favorite' component={Favorite}/>
        </div>
        </Switch>
       </Router>
    </ApolloProvider>
  );
}
export default App;
