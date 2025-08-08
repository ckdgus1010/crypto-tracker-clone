import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.span<{ $isActive?: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: ${props => props.theme.boxColor};
    border-radius: 10px;
    color: ${(props) =>
        props.$isActive ? props.theme.accentColor : props.theme.textColor};
    a {
        padding: 7px 0;
        display: block;
    }
`;

interface IProps {
    isActive: boolean;
    to: string;
    text: string;
}

function Tab({ isActive, to, text }: IProps) {
    return (
        <Wrapper $isActive={isActive}>
            <Link to={to}>{text}</Link>
        </Wrapper>
    );
}

export default Tab;
