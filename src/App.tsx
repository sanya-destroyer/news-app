import {Outlet} from "react-router-dom";

import useOnMount from "./hooks/useOnMount";

import {useAppDispatch} from "./hooks/redux";
import {getArticles} from "./store/articles/articles.action.creators";
import {increaseArticlesFetchStart} from "./store/articles/articles.slice";

import {environment} from "./environment";


function App() {

  const dispatch = useAppDispatch();

  useOnMount(() => {
    dispatch(getArticles({ start: 0, limit: environment.ARTICLES_FIRST_FETCH_COUNT}));
    dispatch(increaseArticlesFetchStart(environment.ARTICLES_FIRST_FETCH_COUNT));
  });

  return <Outlet />;
}

export default App
