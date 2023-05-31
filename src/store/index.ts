import {combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";

import articlesReducer from "./articles/articles.slice";


const rootReducer = combineReducers({
    articles: articlesReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
