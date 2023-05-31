import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {getArticles} from "./articles.action.creators";

import {IArticle, IArticleState} from "../../models/article";

import {environment} from "../../environment";


const initialState: IArticleState = {
    articles: [],
    isLoading: false,
    error: null,
    start: 0,
    filter: "",
    filteredArticles: []
}

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        increaseArticlesFetchStart: (state, action: PayloadAction<number | undefined>) =>
            { state.start += action.payload ?? environment.ARTICLES_PER_FETCH },
        setArticlesFilter: (state, action: PayloadAction<string>) => { state.filter = action.payload },
        setFilteredArticles: (state, action: PayloadAction<IArticle[]>) => { state.filteredArticles = action.payload },
        resetFilteredArticles: (state) => { state.filteredArticles = [...state.articles] }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(getArticles.fulfilled.type, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                state.articles = [...state.articles, ...action.payload];
            })
            .addCase(getArticles.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export default articlesSlice.reducer;
export const {
    increaseArticlesFetchStart,
    setArticlesFilter,
    setFilteredArticles,
    resetFilteredArticles
} = articlesSlice.actions;
