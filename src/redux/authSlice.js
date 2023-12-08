import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  user: sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null,
  error: null,
  token:sessionStorage.getItem("token")
  ? JSON.parse(sessionStorage.getItem("token"))
  : null,
};
export const login = createAsyncThunk(
  "login",

  async (data, thunkAPI) => {
    const response = await fetch("http://localhost:3000/api/login", {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "post",
      body: JSON.stringify(data),
    });
    try {
      if (response.status === 200) {
        const response1 = await response.json();

        return response1;
      }
      return thunkAPI.rejectWithValue("Error in Login");
    } catch (error) {
      return thunkAPI.rejectWithValue("API Error!");
    }
  }
);
export const logout = createAsyncThunk(
  "logout",

  async (data, thunkAPI) => {
    const response = await fetch("http://localhost:3000/api/logout", {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "get",
    
    });
    try {
      if (response.status === 200) {
        const response1 = await response.json();

        return response1;
      }
      return thunkAPI.rejectWithValue("Error in Login");
    } catch (error) {
      return thunkAPI.rejectWithValue("API Error!");
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = null;
        sessionStorage.setItem("user", {});
        sessionStorage.setItem("token", null);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload.user;
        state.error = null;
        state.token=action?.payload.token
        sessionStorage.setItem("user", JSON.stringify(action?.payload.user));
        sessionStorage.setItem("token", JSON.stringify(action?.payload.token));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action?.payload;
        sessionStorage.setItem("user", {});
        sessionStorage.setItem("token", null);
      });
  },
});
export default authSlice.reducer;
