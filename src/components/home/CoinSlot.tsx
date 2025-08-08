import { Link } from "react-router-dom";
import styled from "styled-components";

const Slot = styled.li`
    margin-bottom: 10px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.boxColor};
    border: 1px solid #f8f9fa;
    color: ${(props) => props.theme.textColor};
    a {
        padding: 20px;
        display: flex;
        align-items: center;
    }
`;

const Img = styled.img`
    margin-right: 15px;
    width: 35px;
    height: 35px;
`;

interface IProps {
    imgSrc: string;
    imgAlt: string;
    coinId: string;
    coinName: string;
}

function CoinSlot({ imgSrc, imgAlt, coinId, coinName }: IProps) {
    return (
        <Slot>
            <Link to={{
                pathname: `/${coinId}`
            }}>
                <Img src={imgSrc} alt={imgAlt}></Img>
                <span>{coinName} &rarr;</span>
            </Link>
        </Slot>
    );
}

export default CoinSlot;
