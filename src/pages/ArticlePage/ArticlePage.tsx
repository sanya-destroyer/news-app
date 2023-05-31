import {useNavigate, useParams} from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";

import {Box, Button, Container, Paper, Typography} from "@mui/material";

import {useAppSelector} from "../../hooks/redux";
import {selectArticleById} from "../../store/articles/articles.selector";

import ROUTES from "../../constants/routes";

function ArticlePage() {

    const navigate = useNavigate();

    const { id } = useParams();

    const article = useAppSelector(selectArticleById(id));


    if( !article ) return <ErrorPage />

    const onClick = () => {
        navigate(ROUTES.HOME);
    }

    return (
        <Box
            sx={{  height: "100vh" }}
        >
            <Box
                sx={{ height: "15vh" }}
            >
                <img
                    style={{ objectFit: "cover", width: "100%", maxHeight: "100%" }}
                    src={article.imageUrl}
                    alt="Article photo did not render"
                />
            </Box>

            <Container>
                <Paper
                    sx={{ minHeight: "85vh", position: "relative", top: "-7.5vh", py: 3, px: 4}}
                >
                    <Typography
                        sx={{ fontSize: "1.5rem", textAlign: "center", mb: 4}}
                    >
                        {article.title}
                    </Typography>

                    <Typography
                        sx={{ mb: 2 }}
                    >
                        {article.summary}
                    </Typography>

                    <Typography sx={{ mb: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                        Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.
                    </Typography>

                    <Typography sx={{ mb: 2}}>
                        At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
                        In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.
                    </Typography>

                    <Typography sx={{ mb: 2}}>
                        Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut sagittis proin enim.
                        Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque consectetur.
                    </Typography>

                    <Typography sx={{ mb: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
                        Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla.
                    </Typography>
                </Paper>

                <Paper
                    sx={{ position: "fixed", left: "0", right: "0", bottom: "0", py: 1, px: 5}}
                >
                    <Button
                        onClick={onClick}
                        sx={{ textTransform: "none", fontWeight: 700 , background: "#ffffff" }}
                    >
                        &#x2190; Back to homepage
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
}

export default ArticlePage;
