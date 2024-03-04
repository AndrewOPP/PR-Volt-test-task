import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/app.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
