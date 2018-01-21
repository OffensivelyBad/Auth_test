import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: 'babymonitor-1bed4.firebaseapp.com',
      databaseURL: 'https://babymonitor-1bed4.firebaseio.com',
      projectId: 'babymonitor-1bed4',
      storageBucket: 'babymonitor-1bed4.appspot.com',
      messagingSenderId: '829122627260'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
