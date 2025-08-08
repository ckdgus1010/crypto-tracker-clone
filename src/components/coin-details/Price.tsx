import { useOutletContext } from "react-router-dom";
import PriceSlot from "./PriceSlot";

interface PriceData {
    tickersData: {
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
    };
}

function Price() {
    const priceData = useOutletContext<PriceData>();
    const data = priceData.tickersData.quotes.USD;

    return (
        <div>
            <PriceSlot time="15분" percentage={data?.percent_change_15m} />
            <PriceSlot time="1시간" percentage={data?.percent_change_1h} />
            <PriceSlot time="6시간" percentage={data?.percent_change_6h} />
            <PriceSlot time="하루" percentage={data?.percent_change_24h} />
            <PriceSlot time="일주일" percentage={data?.percent_change_7d} />
            <PriceSlot time="한달" percentage={data?.percent_change_30d} />
            <PriceSlot time="1년" percentage={data?.percent_change_1y} />
        </div>
    );
}

export default Price;
