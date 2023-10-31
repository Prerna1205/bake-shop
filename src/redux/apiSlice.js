import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'http://localhost:3000';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    mode: 'cors',
    prepareHeaders: (headers) => {
      
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    // The getProducts query is a simple GET request to the /products endpoint.
    getProducts: build.query({
      query: () => 'api/getProducts',
      
     providesTags: ['Products'], // Used to invalidate the cache when a product's likes are updated.
    }),
    
    // The getProduct query is a simple GET request to the /products/:id endpoint.
    getProduct: build.query({
      query: (id) => `api/products/${id}`,
     // providesTags: ['Product'], // Used to invalidate the cache when a product's likes are updated.
    }),
    // The updateLikes mutation is a PATCH request to the /products/:id endpoint. This is a mutation because it changes the state of the server.
    // updateLikes: build.mutation({
    //   query: ({ id, likes }) => {
    //     return {
    //       url: `products/${id}`,
    //       method: 'PATCH',
    //       body: { likes: likes >= 0 ? likes : 0 },
    //     };
    //   },
    //   invalidatesTags: ['Products', 'Product'], // This ensures the cached data is refreshed when this query runs. The 'Products' tag ensures the list of products is refreshed (used on Catalog page), and the 'Product' tag ensures the product detail is refreshed. (Used when you click on a product to see its detail.)
    // }),
  
   
  //The updateLikes mutation is a PATCH request to the /products/:id endpoint. This is a mutation because it changes the state of the server.
  postLogin: build.mutation({
    query: ({ email, password }) => {
      return {
        url: `api/login`,
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
      };
    },
    //invalidatesTags: ['Products', 'Product'], // This ensures the cached data is refreshed when this query runs. The 'Products' tag ensures the list of products is refreshed (used on Catalog page), and the 'Product' tag ensures the product detail is refreshed. (Used when you click on a product to see its detail.)
  }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useUpdateLikesMutation,usePostLoginMutation } = catalogApi;
