import axios from "axios";

const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

const GlobalInfo = () => `https://api.coingecko.com/api/v3/global`;

export const chartDays = [
  { label: "24H", value: 1 },
  { label: "30D", value: 30 },
  { label: "3M", value: 90 },
  { label: "1Y", value: 365 },
];

class Service {
  getTrendingCoins = (e) => {
    return axios.get(TrendingCoins(e));
  };

  getSingleCoin = (e) => {
    return axios.get(SingleCoin(e));
  };

  getHistoricalChart = (e, f, g) => {
    return axios.get(HistoricalChart(e, f, g));
  };
  getCoinList = (e) => {
    return axios.get(CoinList(e));
  };

  getGlobalInfo = () => {
    return axios.get(GlobalInfo());
  };

  handleSearch = (e, search) => {
    return e.filter(
      (f) =>
        f.name.toLowerCase().includes(search) ||
        f.symbol.toLowerCase().includes(search)
    );
  };

  isProfit = (e) => {
    return e >= 0 ? true : false;
  };

  addCommas = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default new Service();
