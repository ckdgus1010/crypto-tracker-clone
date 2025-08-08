import { useParams, useMatch, Outlet } from "react-router-dom";
import Container from "../components/commons/Container";
import Header from "../components/commons/Header";
import Title from "../components/commons/Title";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInformation, fetchCoinTickers } from "../apis/CoinDetailsApi";
import CoinOverview from "../components/coin-details/CoinOverview";
import Tab from "../components/coin-details/Tab";
import styled from "styled-components";


const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

interface ICoinInformation {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

function CoinDetails() {
    const { coinId } = useParams();

    const chartPath = `/${coinId}/chart`;
    const pricePath = `/${coinId}/price`;

    const chartMatch = useMatch(chartPath);
    const priceMatch = useMatch(pricePath);

    const { isLoading: coinInfoLoading, data: coinInfo } =
        useQuery<ICoinInformation>({
            queryKey: ["coin-information", coinId],
            queryFn: () => fetchCoinInformation(coinId),
        });

    const { isLoading: tickersLoading, data: tickersData } =
        useQuery<PriceData>({
            queryKey: ["coin-tickers", coinId],
            queryFn: () => fetchCoinTickers(coinId),
        });

    const isLoading = coinInfoLoading || tickersLoading;
    return (
        <Container>
            <Header />
            <Title title={isLoading ? "Loading..." : coinInfo?.name} />
            {isLoading ? (
                ""
            ) : (
                <>
                    <CoinOverview
                        rank={coinInfo?.rank}
                        symbol={coinInfo?.symbol}
                        price={tickersData?.quotes.USD.price}
                        description={coinInfo?.description}
                        total_supply={tickersData?.total_supply}
                        max_supply={tickersData?.max_supply}
                    />
                    <Tabs>
                        <Tab
                            isActive={chartMatch !== null}
                            to={chartPath}
                            text="Chart"
                        />
                        <Tab
                            isActive={priceMatch !== null}
                            to={pricePath}
                            text="Price"
                        />
                    </Tabs>
                    <Outlet context={{tickersData}}/>
                </>
            )}
        </Container>
    );
}

export default CoinDetails;
