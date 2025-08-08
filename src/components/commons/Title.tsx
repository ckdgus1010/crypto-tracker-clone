import styled from "styled-components";

const Wrapper = styled.div`
    display: block;
    padding: 20px 0;
    font-size: 48px;
    font-weight: 400;
    color: ${(props) => props.theme.accentColor};
`;

interface IProps {
    title: string | undefined;
}

function Title({ title }: IProps) {
    return <Wrapper>{title}</Wrapper>;
}

export default Title;
