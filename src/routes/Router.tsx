import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CoinDetails from "../pages/CoinDetails";
import Chart from "../components/coin-details/Chart";
import Price from "../components/coin-details/Price";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:coinId" element={<CoinDetails />}>
                    <Route path={`chart`} element={<Chart />}/>
                    <Route path={`price`} element={<Price />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
