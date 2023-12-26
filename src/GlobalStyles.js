import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#F0F5F9';  // Light sky blue
export const secondaryColor = '#2C3E50';  // Midnight blue
export const accentColor = '#3498DB';  // Dodger blue
export const lightColor = '#E74C3C';  // Light coral
export const textColor = '#34495E';  // Dark slate gray



const GlobalStyles = createGlobalStyle `

    * {
    margin: 0;
    padding: 0;
    color: ${textColor}


    }

    html,
    body {
        background-color: ${primaryColor};
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    p,
    h1,
    h2,
    h3,
    li,
    ul,
    a {
        color: ${textColor};
        font-family: 'Fira Code';
    
    }

    p,
    li,
    ul,
    a {
        @media (max-width: 580px) {
            font-size: 0.8rem;
        }
    }



    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
            background: #FF0000;
        }
`

export default GlobalStyles;