import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  outline: none;
}

body{
    align-items: center;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    font-family: -apple-system, "Nunito", "Roboto", "Lato", sans-serif;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    padding: 0;
    transition: all 0.25s linear;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

a {
    text-decoration: none;
}
  

.weather-card {
    background-color: ${({ theme }) => theme.cardColor};
    color: ${({ theme }) => theme.cardText}
}

.search input {
    color: ${({ theme }) => theme.searchText};
}

.search-icon {
    color: ${({ theme }) => theme.text}
}

.page-heading a {
    color: ${({ theme }) => theme.title}
}

.temperature-toggler {
    color: ${({ theme }) => theme.text}
}
`;
