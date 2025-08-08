import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";

const Wrapper = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    a {
        color: ${(props) => props.theme.textColor};
        span {
            font-size: 30px;
        }
    }
    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        span {
            color: ${props => props.theme.textColor};
        width: 30px;
        height: 30px;
        }
    }
`;

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    
    return (
        <Wrapper>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
            </Helmet>
            <Link
                to={{
                    pathname: "/",
                }}
            >
                <span className="material-symbols-outlined">home</span>
            </Link>
            <button onClick={toggleDarkMode}>
                <span className="material-symbols-outlined">
                    {darkMode ? "dark_mode" : "light_mode"}
                </span>
            </button>
        </Wrapper>
    );
}

export default Header;
