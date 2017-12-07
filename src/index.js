import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCyXUQ94frJiC7E4w2aer6WSw7ANvWj7sk",
  authDomain: "bike-platform.firebaseapp.com",
  databaseURL: "https://bike-platform.firebaseio.com",
  projectId: "bike-platform",
  storageBucket: "bike-platform.appspot.com",
  messagingSenderId: "277409707617"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />, 
  document.getElementById('root'));
registerServiceWorker();
