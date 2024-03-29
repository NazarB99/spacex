import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';

import './App.css';

const client = new ApolloClient({
    uri:'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="container ">
              <h1 style={{display:"block",width:300, margin:"auto"}}>SpaceX</h1>
              <Launches/>
          </div>
      </ApolloProvider>
    );
  }
}

export default App;
