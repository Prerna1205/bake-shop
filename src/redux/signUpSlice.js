import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import env from 'react-dotenv';
const apiBaseUrl=env.REACT_APP_API_URL;
const initialState = {
    loading: false,
    signUpData: '',
    error: null,
  };
  export const signUp = createAsyncThunk(
    'signUp',
    async (data,thunkAPI) => {
        const response = await fetch(`${apiBaseUrl}/api/signup`, {
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin':'*',
            },
            method: "post",
            body: JSON.stringify(data),
          }).catch((error)=>
          {
            return thunkAPI.rejectWithValue('No Resonse from Server!');
          });
          try {
            if(response.status){
              if (response.status === 200) {
                const response1 = await response.json();
                return response1;
              }else{
              return thunkAPI.rejectWithValue("Error in Signup!Please try agian.");
              }
            }
            else{
              return thunkAPI.rejectWithValue('No Resonse from Server!');
            }
            }
          catch(error)
          {
            return thunkAPI.rejectWithValue('No Resonse from API!');
          }
      
    },
  );

  const authSlice = createSlice({
    name: 'signUp',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(signUp.pending, (state) => {
          state.loading = true;
          state.signUpData = '';
          state.error = null;
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.loading = false;
          state.signUpData = action?.payload;
          state.error = null;
        })
        .addCase(signUp.rejected, (state, action) => {
          state.loading = false;
          state.signUpData = '';
          state.error = action?.payload;
        });
    },
  });
  export default authSlice.reducer;
