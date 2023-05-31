export interface IArticle {
    id: number;
    title: string;
    imageUrl: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    priority?: number;
}

export interface IArticleState {
    articles: IArticle[];
    error: string | null;
    isLoading: boolean;
    start: number;
    filter: string;
    filteredArticles: IArticle[];
}
