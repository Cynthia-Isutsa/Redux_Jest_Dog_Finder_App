import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer.tsx'
  

const store = configureStore({
  reducer : {
users: UserReducer

  }
})

//console.log({store})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store ={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
