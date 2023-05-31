import {RootState} from "../index";

import {createSelector} from "@reduxjs/toolkit";


const selectFeature = (state: RootState) => state.articles;

export const selectIsArticlesLoading = createSelector(selectFeature, (state) => state.isLoading);
export const selectArticles = createSelector(selectFeature, (state) => state.articles);

export const selectArticlesError = createSelector(selectFeature, (state) => state.error);

export const selectArticleById = (id?: string | number) =>
    createSelector(selectFeature, (state) => state.articles.find(article => article.id == id ));

export const selectArticlesStart = createSelector(selectFeature, (state) => state.start);

export const selectArticleFilter = createSelector(selectFeature, (state) => state.filter);
export const selectFilteredArticles = createSelector(selectFeature, (state) => state.filteredArticles);
