import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './src/reducers';
import Router from './src/router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAukJV2gm8zImafSqDg34T_f1NyckHDpCE',
      authDomain: 'manager-66c3d.firebaseapp.com',
      databaseURL: 'https://manager-66c3d.firebaseio.com',
      projectId: 'manager-66c3d',
      storageBucket: '',
      messagingSenderId: '164354394454'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
