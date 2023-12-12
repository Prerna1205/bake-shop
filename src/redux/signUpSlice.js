import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
const initialState = {
    loading: false,
    signUpData: '',
    error: null,
  };
  export const signUp = createAsyncThunk(
    'signUp',
    async (data,thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/signup", {
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin':'*',
            },
            method: "post",
            body: JSON.stringify(data),
          });
        try{  
          if(response.status === 200){
          
            const response1=await response.json();
           
            return response1;

            }
            return thunkAPI.rejectWithValue("Error in signup!");
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
