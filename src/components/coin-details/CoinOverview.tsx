import styled from "styled-components";

const Group = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.boxColor};
    padding: 10px 20px;
    border-radius: 10px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.textColor};

    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;

const Description = styled.p`
    margin: 20px 0px;
    color: ${(props) => props.theme.textColor};
`;

interface IProps {
    rank: number | undefined;
    symbol: string | undefined;
    price: number | undefined;
    description: string | undefined;
    total_supply: number | undefined;
    max_supply: number | undefined;
}

function CoinOverview({
    rank,
    symbol,
    price,
    description,
    total_supply,
    max_supply,
}: IProps) {
    return (
        <>
            <Group>
                <Item>
                    <span>Rank:</span>
                    <span>{rank}</span>
                </Item>
                <Item>
                    <span>Symbol:</span>
                    <span>{symbol}</span>
                </Item>
                <Item>
                    <span>Price:</span>
                    <span>{price?.toFixed(3)}</span>
                </Item>
            </Group>
            <Description>{description}</Description>
            <Group>
                <Item>
                    <span>Total Suply:</span>
                    <span>{total_supply}</span>
                </Item>
                <Item>
                    <span>Max Supply:</span>
                    <span>{max_supply}</span>
                </Item>
            </Group>
        </>
    );
}

export default CoinOverview;
