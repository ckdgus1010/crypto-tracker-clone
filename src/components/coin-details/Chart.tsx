import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../../apis/CoinDetailsApi";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";

const Loader = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 15px;
    color: ${(props) => props.theme.textColor};
    background-color: ${props => props.theme.boxColor};
    font-weight: 400;
`;

interface IHistoricalData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Chart() {
    const { coinId } = useParams();
    const { darkMode } = useTheme();
    const { isLoading, data } = useQuery<IHistoricalData[]>({
        queryKey: ["ohlcv", coinId],
        queryFn: () => fetchCoinHistory(coinId),
        refetchInterval: 10_000,
    });

    return (
        <div>
            {isLoading ? (
                <Loader>"Loading chart..."</Loader>
            ) : (
                <ApexCharts
                    type="candlestick"
                    series={[
                        {
                            data:
                                data?.map((history) => [
                                    new Date(parseInt(history.time_close) * 1000).toISOString(),
                                    [
                                        history.open,
                                        history.high,
                                        history.low,
                                        history.close,
                                    ],
                                ]) ?? [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: darkMode ? "dark" : "light",
                        },
                        chart: {
                            toolbar: {
                                show: false,
                            },
                        },
                        plotOptions: {
                            candlestick: {
                                wick: {
                                    useFillColor: true,
                                },
                                colors: {
                                    upward: "#3C90EB",
                                    downward: "#DF7D46",
                                },
                            },
                        },
                        xaxis: {
                            type: "datetime",
                            labels: {
                                show: true,
                                datetimeFormatter: {
                                    month: "mmm 'yy",
                                },
                            },
                        },
                        yaxis: {
                            show: false,
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
