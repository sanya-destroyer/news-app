import {Link} from "react-router-dom";
import React, {memo} from "react";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {IArticle} from "../../../models/article";

import isWordInString from "../../../utils/isWordInString";
import sliceString from "../../../utils/sliceString";
import formatDate from "../../../utils/formatDate";

import {useAppSelector} from "../../../hooks/redux";
import {selectArticleFilter} from "../../../store/articles/articles.selector";

import {environment} from "../../../environment";

import ROUTES from "../../../constants/routes";


function Article({ id, title, imageUrl, summary, publishedAt }: IArticle) {

    const currentFilter = useAppSelector(selectArticleFilter);

    const handleArticleTextFormat = (string: string, length: number) => {
        const filterWithUniqueWords = [...new Set(currentFilter.toLowerCase().split(" "))].join(" ");

        return sliceString(string, length).split(" ").map((word, index) => {
            if ( !isWordInString(word, filterWithUniqueWords) ) return <React.Fragment key={index}> {word} </React.Fragment>;

            return (
                <Typography key={index} component="span" sx={{ background: "rgba(255, 246, 25, 0.63);", fontSize: "inherit", lineHeight: "inherit"}}>{word} </Typography>
            )
        });
    }

    const formattedTitle = handleArticleTextFormat(title, environment.MAX_ARTICLE_TEXT_LENGTH);
    const formattedSummary = handleArticleTextFormat(summary, environment.MAX_ARTICLE_TEXT_LENGTH);
    const formattedDate = formatDate(publishedAt);

    return (
        <Card sx={{
            maxWidth: 400,
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateRows: "200px 1fr auto",
        }}>
            <CardMedia
                sx={{ height: 200 }}
                image={imageUrl}
                title={title}
            />
            <CardContent sx={{
                display: "grid",
                gap: 1,
                gridTemplateRows: "auto 1fr minmax(1.5rem, 5.5rem)",
            }}>
                <Typography
                    color="primary"
                    sx={{ fontWeight: 400, fontSize: 14, opacity: 0.8, display: "flex", alignItems: "center", gap: ".5em", mb: 1}}
                >
                    <CalendarTodayIcon fontSize="inherit"/> {formattedDate}
                </Typography>

                <Typography
                    gutterBottom
                    component="div"
                    sx={{
                        fontSize: { xs: "1.25rem", md: "1.5rem"},
                    }}
                >
                    {formattedTitle}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        maxWidth: "100%",
                    }}
                >
                    {formattedSummary}
                </Typography>

            </CardContent>

            <CardActions
                sx={{ pt: 0 }}
            >
                <Button
                    component={Link}
                    to={ROUTES.ARTICLE(id)}
                    size="small"
                    sx={{ fontWeight: 700, fontSize: 16, textTransform: "none" }}
                >
                    Read more &#8594;
                </Button>
            </CardActions>
        </Card>
    );
}

export default memo(Article);
