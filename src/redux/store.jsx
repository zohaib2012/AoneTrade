import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from "@reduxjs/toolkit";
import { commonapi } from "./Comonapi";
import { p_detailapi } from './p.detailapi';
import { transcationapi } from './Depositmoney';
import { emailapi } from './emailverification';
import { createaccountapi } from './createaccountapi';
import { documentapi } from './documentapi';
// import { userSlice } from './userslice';
// import {userSlice} from ''

export const store = configureStore({
    reducer: {

        [commonapi.reducerPath]: commonapi.reducer,

        [documentapi.reducerPath]: documentapi.reducer,
        [p_detailapi.reducerPath]: p_detailapi.reducer,

        [transcationapi.reducerPath]: transcationapi.reducer,
        [emailapi.reducerPath]: emailapi.reducer,
        [createaccountapi.reducerPath]: createaccountapi.reducer
        // [userSlice.reducerPath]:userSlice.reducer

    },


    middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(commonapi.middleware)
        .concat(documentapi.middleware).concat(p_detailapi.middleware).concat(transcationapi.middleware).concat(emailapi.middleware).concat(createaccountapi.middleware)
    // .concat(userSlice.middleware)

})
setupListeners(store.dispatch);

