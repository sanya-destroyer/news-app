import {createBrowserRouter, Navigate} from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import ROUTES from "../constants/routes";


const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />
            },
            {
                path: ROUTES.ARTICLE(),
                element: <ArticlePage />
            },
            {
                path: ROUTES.NON_MATCHING,
                element: <Navigate to={ROUTES.HOME}/>
            }
        ]
    }
]);

export default router;
