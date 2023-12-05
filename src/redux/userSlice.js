import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
const initialState = {
    loading: false,
    addressData: '',
    error: null,
  };
  export const address = createAsyncThunk(
    'address',
    async (data,thunkAPI) => {
        const response = await fetch("http://localhost:3000/api/addAddress", {
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
            return thunkAPI.rejectWithValue("Error in adding address.");
        }
          catch(error)
          {
            return thunkAPI.rejectWithValue('API Error!');
          }
      
    },
  );

  const authSlice = createSlice({
    name: 'address',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(address.pending, (state) => {
          state.loading = true;
          state.addressData = '';
          state.error = null;
        })
        .addCase(address.fulfilled, (state, action) => {
          state.loading = false;
          state.addressData = action?.payload;
          state.error = null;
        })
        .addCase(address.rejected, (state, action) => {
          state.loading = false;
          state.addressData = '';
          state.error = action?.payload;
        });
    },
  });
  export default authSlice.reducer;
