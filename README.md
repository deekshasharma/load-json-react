## Set up React Application

- Open your terminal and run these commands to get a sample Create React App running on your machine.

```sh

npx create-react-app load-json-data

cd load-json-data

yarn start

```

- Now to run the app in the development mode, <br />
open [http://localhost:3000](http://localhost:3000) in the browser and you should see the sample app running with this React logo.

## Add JSON Data to a File
Create a file in your project at location -  `src/data.js` and add the data below in your `data.js` file.
/// TBD: Add about export const

```js
export const stockData = [
  {
    company: "Twitter Inc",
    ticker: "TWTR",
    stockPrice: "22.76 USD",
    timeElapsed: "5 sec ago"
  },
  {
    company: "Square Inc",
    ticker: "SQ",
    stockPrice: "45.28 USD",
    timeElapsed: "10 sec ago"
  },
  {
    company: "Shopify Inc",
    ticker: "SHOP",
    stockPrice: "341.79 USD",
    timeElapsed: "3 sec ago"
  },
  {
    company: "Sunrun Inc",
    ticker: "RUN",
    stockPrice: "9.87 USD",
    timeElapsed: "4 sec ago"
  },
  {
    company: "Adobe Inc",
    ticker: "ADBE",
    stockPrice: "300.99 USD",
    timeElapsed: "10 sec ago"
  },
  {
    company: "HubSpot Inc",
    ticker: "HUBS",
    stockPrice: "115.22 USD",
    timeElapsed: "12 sec ago"
  }
];

```

This is a `JSON` array containing dummy stock prices of some companies. Each `JSON` Object inside this array contain

- Name of the company
- Stock ticker for the company
- Price of its stock
- Last updated time in seconds


## Update App Component
- It's time to update our `<App>` component because we need to render `JSON` data into our components. So head on to the `src/App.js` file and remove all the boilerplate code that came with it. Instead add this piece of code to the App component.

```js
import React from "react";
import "./App.css";
import { Stocks } from "./Stocks";

function App() {
  return (
    <div className="App">
      <Stocks />
    </div>
  );
}

export default App;

```
- Go to the browser and open [http://localhost:3000](http://localhost:3000) you will see errors in the application because `<App/>` component wraps and return a `<Stocks/>` component which doesn't exist as of yet. Don't worry we will add this new component next.

## Create Stocks Component
- Since we need to render this `JSON` data in the tabular format, we will now add a new component inside the `src` directory and name it `Stocks.js`.
The location of `<Stocks/>` component inside your project should be `src/Stocks.js`. Add this code to your `<Stocks>` component file.

```js
import React from "react";
import "./App.css";

export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        Welcome to Stock Tracker
      </div>
    </>
  );
};
```
This code currently doesn't do anything except returning a `<div>` containing message **Welcome to Stock Tracker** but we will extend this code shortly.

- Let's also add the `css` class `stock-container` inside `src/App.css` file. The code inside `App.css` file should look like this:

```css
.App {
  text-align: center;
}

.stock-container {
  padding-left: 3em;
  padding-right: 3em;
  margin-top: 3em;
}
```


- Go to the browser and open [http://localhost:3000](http://localhost:3000), this message should be rendered on your web page and there should not be any errors.

## Load JSON Data into Stocks Component
- Now that your `<Stocks>` component is ready, we can get the JSON data from the `src/data.js` file and render inside `<Stocks>`. React allow using named imports and we can leverage that to load `JSON` data. So go ahead and add this `import` in your `src/Stocks.js` file.

```js
import { stockData } from "./data";
```

- Next task is to iterate over the `stockData` array imported from `data.js` file. 










### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.