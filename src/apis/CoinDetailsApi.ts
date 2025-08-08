const BASE_URL = "https://api.coinpaprika.com/v1";
const OHLCV_URL = "https://ohlcv-api.nomadcoders.workers.dev/";

export async function fetchCoinInformation(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
        response.json()
    );
}

export async function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}

export async function fetchCoinHistory(coinId: string) {
    return fetch(`${OHLCV_URL}?coinId=${coinId}`).then((response) =>
        response.json()
    );
}
