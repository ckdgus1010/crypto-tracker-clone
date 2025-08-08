const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchTop100Coins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
