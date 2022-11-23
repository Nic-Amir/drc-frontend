import { makeStyles, TableContainer, Typography } from "@material-ui/core";

import React from "react";
import { CryptoState } from "../CryptoContext";
import bestperformanceicon from "../asset/bestperformanceicon.png";
import worstperformericon from "../asset/worstperformericon.png";
import bell from "../asset/alert-1.png";
import currentbalance from "../asset/current-balance .png";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    width: "24%",
    margin: 15,
    borderRadius: "15px",
    background: "rgba(79, 58, 84, 0.52)",
    minHeight: "185px",
    [theme.breakpoints.down("md")]: {
      width: "30%",
      alignItems: "flex-start",
    },
  },
  marketContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

function Portfolioinfo({
  avgPriceChange,
  topPerformCoin,
  Worst,
  alert,
  period,
}) {
  const classes = useStyles();
  const { currency, symbol, watchlist } = CryptoState();

  const alerts = alert?.map((coin) => {
    if (watchlist?.includes(watchlist?.find((watch) => watch.id === coin.id))) {
      return (
        <div style={{ display: "flex", alignItems: "center", padding: 5 }}>
          <img
            src={coin?.image?.small}
            height="30"
            style={{ marginRight: 10 }}
          />
          <Typography>{coin?.name}</Typography>
        </div>
      );
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className={classes.marketContainer}>
        <div
          className={classes.infoContainer}
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <img src={currentbalance} height="30" />
          <Typography style={{ width: "max-content", padding: 15 }}>
            Profit Estimation
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bolder",
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {avgPriceChange ? avgPriceChange?.toFixed(2) : ""} {"%"}
          </Typography>
        </div>
        <div className={classes.infoContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div>
              <img src={bestperformanceicon} alt="best coin Icon" height="30" />
            </div>
            <div>{topPerformCoin?.market_data[period]?.toFixed(2)}</div>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                width: "max-content",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Top Performance Coin
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={topPerformCoin?.image?.large}
                height="30"
                style={{ marginRight: 10 }}
              />
              <Typography>{topPerformCoin?.symbol?.toUpperCase()}</Typography>
            </div>
            <div>
              {symbol}
              {topPerformCoin?.market_data?.current_price[
                currency.toLowerCase()
              ]?.toPrecision(4)}
            </div>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div>
              <img src={worstperformericon} alt="worst coin Icon" height="30" />
            </div>
            <div>{Worst?.market_data[period]?.toFixed(2)}</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                width: "max-content",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Worst Performance Coin
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Worst?.image?.large}
                height="30"
                style={{ marginRight: 10 }}
              />
              <Typography>{Worst?.symbol?.toUpperCase()}</Typography>
            </div>

            <div>
              {symbol}
              {Worst?.market_data?.current_price[currency.toLowerCase()]}
            </div>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <img src={bell} alt="alert Icon" height="30" />
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                width: "max-content",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Alert Coin (24h)
            </Typography>
          </div>

          <div
            style={{ width: "100%", overflowY: "scroll", maxHeight: "100px" }}
          >
            {alerts.length == 0 ? (
              <Typography>no major drop in the last 24h</Typography>
            ) : (
              alerts
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolioinfo;
