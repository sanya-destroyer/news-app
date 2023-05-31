## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## About

This project was created to display news using the Spaceflight News API. The main page displays news, the number of which can be changed in the configuration code file. News is automatically added when you scroll to the end of the page. 

![Main Screen](https://i.imgur.com/Qxw67Gr.png)

News can be filtered by keywords in both the title and description of the article. The words found are highlighted by color. Articles are also sorted by priority, where the word found in the title of the article is more important than the word found in the description.

![Search Demo](https://i.imgur.com/iJGotHw.png)

Each article has a link to the page. The page contains a full description of the article and navigation to return to the main page.

![News page demo](https://i.imgur.com/eXoUMLn.png)