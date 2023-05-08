import { configureStore } from '@reduxjs/toolkit'
import  commandeSlice  from './commandeSlice'

import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    commande: commandeSlice

  },
})
