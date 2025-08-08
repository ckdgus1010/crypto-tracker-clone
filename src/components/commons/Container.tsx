import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 480px;
`;

interface IProps {
    children?: React.ReactNode;
}

function Container({ children }: IProps) {
    return <Wrapper>{children}</Wrapper>;
}

export default Container;
