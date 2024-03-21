import { configureStore } from '@reduxjs/toolkit'
import  categoriasReducer  from '../features/slices/categoriasSlice'

export const store = configureStore({
    reducer: {
      categorias: categoriasReducer
    }
})

export default store;