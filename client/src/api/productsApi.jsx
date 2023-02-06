import { emptySplitApi, fetchBaseQuery } from './apiSlice';

const products = emptySplitApi.injectEndpoints({
  baseQuery: fetchBaseQuery({ baseUrl: 'products' }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => '',
    }),
    getStyles: build.query({
      query: (id) => `${id}/styles`,
    }),
  }),
});
