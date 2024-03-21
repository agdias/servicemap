import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import  axios from 'axios';
import { apiBaseURL } from "../../storage/constants";

const initialState = {

    list: [],
    loading: 'idle'
  
}
    

export const buscaCategorias = createAsyncThunk(
    'categorias/buscaCategorias',
    async () => {
        try {
            const response =  await axios.get(`${apiBaseURL}/categorias`)    
            console.log(response.data.data.length)     
            return response.data
        }
        catch(e) {
            console.log(e)
        }
       
    }
)

export const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(buscaCategorias.fulfilled, (state, action) => {
         state.list = action.payload
        })
    }
        
          

})


export default categoriasSlice.reducer;