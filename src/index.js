import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import Store from './store'

const unsubscribe = Store.subscribe(() => {
  console.log('Store has changed!', Store.getState())
})
unsubscribe()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

