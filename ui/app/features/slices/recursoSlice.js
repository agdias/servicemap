import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit'
import { baseApiURL } from '../../storage/constants'

const buscaRecursos = createAsyncThunk(
    'recursos/buscaRecursos',
    async() => {
        const response = await fetch(`${baseApiURL}/recursos`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        return response.json()
     
    }
)

const recursosSlice = createSlice({
    name: 'recursos',
    initialState: {
        loading: 'idle',
        recursos: []
    },
    extraReducers: (builder) => {
        builder.addCase(buscaRecursos.fulfilled, (state, action) => {
         
        })
    }
        
    
})