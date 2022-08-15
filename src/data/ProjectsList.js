import RecipesApp from "../images/RecipesApp.jpeg";
import trivia from "../images/trivia.jpg";
import wallet from "../images/wallet.jpeg";
import shoppingCart from "../images/shoppingCart.jpeg";
import HTMLIcon from "../icons/HTMLIcon";
import JSIcon from "../icons/JSIcon";
import ReactIcon from "../icons/ReactIcon";
import SassIcon from "../icons/SassIcon";
import ReduxIcon from "../icons/ReduxIcon";
import CSSIcon from "../icons/CSSIcon";
import BootStrapicon from "../icons/BootStrapIcon";
import RTLIcon from "../icons/RTLIcon";


const projectsList = [
  {
    title: 'Recipes App',
    thumbnail: RecipesApp,
    gitHub: 'https://github.com/CarolinaKauark/App-Recipes-project',
    description: `Esse  é um projeto front end de um aplicativo de receitas que utiliza uma API aberta como base. O app possui 7 páginas diferentes, sendo possível, logar, escolher a receita e ver as sugestões de acompanhamento, ver os detalhes, acompanhar o passo a passo, favoritas e ver as receitas já prontas daquele usuário. 
    OBS: O layout do projeto foi feito para o formato Android 360 x 640. O layout para desktop está em construção.`,
    descriptionEn: `This is a front end project for a recipe application that uses an open API as a database. The app has 7 different pages, being able to log in, choose the recipe and see the follow-up suggestions, see the details, follow the instructions step by step, bookmark and see the user's ready-made recipes.
    PS: The project layout was made for Android 360 x 640 format. The desktop layout is under construction.`,
    link: 'https://app-recipes-project.vercel.app/',
    skills: [<JSIcon />, <ReactIcon />, <BootStrapicon />, <RTLIcon />]  
  },
  {
    title: 'Trivia Game',
    thumbnail: trivia,
    gitHub: 'https://github.com/CarolinaKauark/trivia-game',
    description: 'O projeto de Trivia Game é um jogo de perguntas e respostas, desenvolvido em grupo. É um ótimo projeto para ser aplicado em escolas afim de reforçar os conhecimentos da matéria. Nesse projeto utilizamos uma API aberta como base, além disso foi desenvolvido apenas com conhecimento de front-End.',
    descriptionEn: 'The Trivia Game project is a question and answer game developed in group. It is a great project to be applied in schools in order to reinforce the knowledge of the subject. We were able to focus on the front end stage of development using an open API as a dynamic content database, abstracting the back end infrastructure.',
    link: 'https://carolinakauark.github.io/trivia-game/',
    skills: [<JSIcon />, <ReactIcon />, <SassIcon />, <ReduxIcon />, <RTLIcon />]  
  },
  {
    title: 'Wallet!',
    thumbnail: wallet,
    gitHub: 'https://github.com/CarolinaKauark/Project-Wallet',
    description: 'Esse projeto permite converter as despesas de uma pessoa realizadas com moedas estrangeiras para o Real. Wallet! foi realizando individualmente com React como biblioteca e Redux para gerenciamento de estado global.',
    descriptionEn: `This application allows the conversion and tracking of expenses from foreign currencies to Brazilian Real using React as a UI / UX Provider and Redux for state management. Deployed and published using Vercel.`,
    link: 'https://project-wallet-4iuvql2qn-carolinakauark.vercel.app/',
    skills: [<JSIcon />, <ReactIcon />, <CSSIcon />, <ReduxIcon />, <RTLIcon />]  
  },
  {
    title: 'Shopping Cart',
    thumbnail: shoppingCart,
    gitHub: 'https://github.com/CarolinaKauark/Project-shopingCart',
    description: 'O projeto ShoppingCart é um projeto front-End de um site de vendas, utilizando um API aberta e desenvolvido individualmente. Esse projeto foi realizando no final do módulo de fundamentos da Trybe utilizando apenas os conhecimentos de HTML, CSS e JS.',
    descriptionEn: `The ShoppingCart project is a front end website sales, using an open API. This project was developed individually and at the end of Trybe's fundamentals module using only the knowledge of HTML, CSS and JS.` ,
    link: 'https://carolinakauark.github.io/Project-shopingCart/',
    skills: [<JSIcon />, <HTMLIcon />, <CSSIcon />]  
  },
]

export default projectsList;