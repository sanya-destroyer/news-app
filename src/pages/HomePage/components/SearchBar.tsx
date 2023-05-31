import {ChangeEventHandler, memo, useEffect, useState} from "react";

import {IconButton, InputBase, Paper} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import useDebounceValue from "../../../hooks/useDebounceValue";

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setArticlesFilter} from "../../../store/articles/articles.slice";
import useOnMount from "../../../hooks/useOnMount";
import {selectArticleFilter} from "../../../store/articles/articles.selector";


function SearchBar() {
    const articlesFilter = useAppSelector(selectArticleFilter);

    const [query, setQuery] = useState(() => articlesFilter);
    const debounceQuery = useDebounceValue(query);
    const dispatch = useAppDispatch();


    useOnMount(() => {
        setQuery(articlesFilter);
    });

    useEffect(() => {
        dispatch(setArticlesFilter(debounceQuery));
    }, [debounceQuery]);

    const handleInputChange: ChangeEventHandler = (event) => {
        setQuery((event.target as HTMLInputElement).value);
    }

    return (
        <Paper
            component="form"
            onSubmit={(event) => { event.preventDefault() }}
            elevation={3}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 600 }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                onChange={handleInputChange}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by keywords"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={query || ""}
            />
        </Paper>
    );
}

export default memo(SearchBar);
