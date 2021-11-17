import pf1 from '../../assets/images/pf-1.webp';
import furniture from '../../assets/images/furniture.webp';
import snowboards from '../../assets/images/sb.webp';
import calculator from '../../assets/images/calculator.webp';
import quiz from '../../assets/images/quiz.webp';
import algolab from '../../assets/images/algolab.webp';
import nitroMenu from '../../assets/images/nitroMenu.webp';
import starWars from '../../assets/images/starWars.webp';

export const projectsData = [
    {
        id: 1,
        title: "first portfolio",
        category: "other",
        path: "https://joakimfirstpf.netlify.app/",
        desc: "The title says it all. This was my first portfolio.",
        tech: "HTML, SCSS, JavaScript",
        gitLink: "",
        image: pf1
    },
    {
        id: 2,
        title: "acme furniture",
        category: "big",
        path: "https://acmefurniture.netlify.app/",
        desc: "A shopping app with some 3D features. You can put in the cart or in the wish-list, search for a category. Stuff saved in localStorage.",
        tech: "HTML, SCSS, JavaScript",
        gitLink: "",
        image: furniture
    },
    {
        id: 4,
        title: "snowboards",
        category: "small",
        path: "https://snowboards-2021.netlify.app/",
        desc: "A list of items with some functions. For this I created an external API to hold the information.",
        tech: "React, Styled-Components",
        gitLink: "https://github.com/JoakimWretlind/snowboards-20-21",
        image: snowboards
    },
    {
        id: 5,
        title: "theme calculator",
        category: "small",
        path: "https://theme-calculator.netlify.app/",
        desc: "This one lets you select a theme for your calculator using localStorage.",
        tech: "React, Styled-Components",
        gitLink: "https://github.com/JoakimWretlind/Theme-Calculator",
        image: calculator
    },
    {
        id: 6,
        title: "quiz",
        category: "small",
        path: "https://jw-codequiz.netlify.app/",
        desc: "A multiselection quiz-app to learn about programming.",
        tech: "React, Styled-Components",
        gitLink: "https://github.com/JoakimWretlind/quiz-2",
        image: quiz
    },
    {
        id: 7,
        title: "algolab",
        category: "big",
        path: "https://algolab.netlify.app/",
        desc: "A bigger app to help people learn about algorithms and datastructures.",
        tech: "React, Styled-Components, Context API",
        gitLink: "https://github.com/JoakimWretlind/algolab",
        image: algolab
    },
    {
        id: 8,
        title: "nitro-menu",
        category: "small",
        path: "https://nitro-menu.netlify.app/",
        desc: "Watch all items or pick a category and watch only the items in that category.",
        tech: "React, Styled-Components",
        gitLink: "https://github.com/JoakimWretlind/nitroMenu",
        image: nitroMenu
    },
    {
        id: 9,
        title: "star Wars",
        category: "small",
        path: "https://joakim-swapi.netlify.app/",
        desc: "An app using the Star Wars API",
        tech: "React, Styled-Components, Gsap, Framer-Motion",
        gitLink: "https://github.com/JoakimWretlind/starwars-api-project",
        image: starWars
    },
]