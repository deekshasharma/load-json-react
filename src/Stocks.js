import React from "react";
import "./App.css";
import { Typography, Grid, Button } from "@material-ui/core";
import { stockData } from "./data";

export const Stocks = ({ onClick }) => {
  return (
    <>
      <HomePageHeader />
      <RefreshStocks onClick={onClick} />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </div>
          );
        })}
      </div>
      <Stock />
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <Typography variant="h2">Stock Prices</Typography>
    </header>
  );
};

const RefreshStocks = ({ onClick }) => {
  return (
    <div className="refresh-container">
      <Button onClick={onClick} variant="contained" color="primary">
        REFRESH
      </Button>
    </div>
  );
};

const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <Grid container className="stock" alignItems="center">
      <Grid item xs={6} sm={4}>
        <Typography variant="subtitle1">{company}</Typography>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Typography variant="h6">{ticker}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="subtitle2">{stockPrice}</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2" color="textSecondary">{timeElapsed}</Typography>
      </Grid>
    </Grid>
  );
};
