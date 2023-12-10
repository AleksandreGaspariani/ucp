import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userReducer'
import globalReducer from './globalReducer'

export default configureStore({
  reducer: {
    logged: userReducer,
    global: globalReducer
  },
})