import librarypic from "../projectimg/library.png";
import easyViewPic from "../projectimg/easyView.png";
import wordlePic from "../projectimg/wordle.png";
import valo from "../projectimg/valo.png";

export const projects = [
  {
    img: wordlePic,
    title: "Wordle clone",
    para: "A wordle clone built with React, using cookies and local storage to store the user's progress. ",
    githublink: "https://github.com/OZY3112/wordle",
    websitelink: "https://wordle-ozy.vercel.app/",
    tools: " SCSS | Cookies | JavaScript | React | Node.Js",
  },
  {
    img: valo,
    title: "VALO-match",
    para: "Matching game with a valorant theme",
    githublink: "https://github.com/OZY3112/matching-game",
    websitelink: "https://valo-match.vercel.app/",
    tools: " tailwindcss | chakra-ui| JavaScript | TypeScript | React | Vite | Node.Js",
  },
  {
    img: librarypic,
    title: "E-Commerce library",
    para: "Using best practices with Html (BEM), Css, and javaScript, while using React (+hooks) i built a fake E-library and a clean UI design with a easy-to-understand layout for the website.",
    githublink: "https://github.com/OZY3112/E-Commerce-library",
    websitelink: "https://e-commerce-library.vercel.app/",
    tools: " CSS | JavaScript | React | Node.Js",
  },
  {
    img: easyViewPic,
    title: "Easy view",
    para: "Using the TMDB API and Axios I made a website (in 3 days) where you can look for a movie name and find all of the results and also get access to more information by clicking on the movie poster.",
    githublink: "https://github.com/OZY3112/views_bata",
    websitelink: "https://easy-view.vercel.app/",
    tools: " SCSS | JavaScript | React | Vite | axios | Node.Js",
  },
];
