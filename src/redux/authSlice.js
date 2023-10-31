import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
const initialState = {
    loading: false,
    loginData: '',
    error: null,
  };
  export const login = createAsyncThunk(
    'login',
    async (data,thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/login", {
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
            console.log(response1);
            return response1;

            }
            return thunkAPI.rejectWithValue("Error in Login");
        }
          catch(error)
          {
            return thunkAPI.rejectWithValue('API Error!');
          }
      
    },
  );

  const authSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.loginData = '';
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.loginData = action?.payload;
          state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.loginData = '';
          state.error = action?.payload;
        });
    },
  });
  export default authSlice.reducer;
