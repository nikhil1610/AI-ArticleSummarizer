import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const Store = configureStore({
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});