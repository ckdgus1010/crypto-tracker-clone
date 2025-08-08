import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 15px;
    color: ${(props) => props.theme.textColor};
    background-color: ${props => props.theme.boxColor};
    font-weight: 400;
`;

const Direction = styled.span<{ isUp: boolean }>`
    color: ${({isUp}) => (isUp ? "#4dabf7" : "#fa5252")};
    font-weight: bold;
`;

interface IProps {
    time: string;
    percentage: number;
}

function PriceSlot({ time, percentage }: IProps) {
    const isUp = percentage >= 0;
    return (
        <Wrapper>
            <span>{time} 전 보다</span>
            <span>
                {Math.abs(percentage).toFixed(2)}
                {"%"}
                <Direction isUp={isUp}>{isUp ? " 오름" : " 내림"}</Direction>
            </span>
        </Wrapper>
    );
}

export default PriceSlot;
