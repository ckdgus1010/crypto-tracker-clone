import { useQuery } from "@tanstack/react-query";
import { fetchTop100Coins } from "../apis/HomeApi";
import Container from "../components/commons/Container";
import Title from "../components/commons/Title";
import CoinSlot from "../components/home/CoinSlot";
import Header from "../components/commons/Header";

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Home() {
    const { isLoading, data } = useQuery<ICoin[]>({
        queryKey: ["top-100-coins"],
        queryFn: fetchTop100Coins,
    });

    return (
        <Container>
            <Header />
            <Title title="Home" />
            {isLoading ? (
                "Loading"
            ) : (
                <ul>
                    {data?.slice(0, 100).map((coin) => (
                        <CoinSlot
                            key={coin.id}
                            imgSrc={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                            imgAlt={coin.name}
                            coinId={coin.id}
                            coinName={coin.name}
                        />
                    ))}
                </ul>
            )}
        </Container>
    );
}

export default Home;
