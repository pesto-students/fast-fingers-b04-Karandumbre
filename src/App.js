import React from "react";
import Layout from "./containers/layout/layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import { get, set } from "idb-keyval";
const words = require("./dictionary.json");
const easyDictWords = words.filter((word) => word.length <= 5);

const storeDataInIndexDb = async (words) => {
  const easy = [];
  const medium = [];
  const hard = [];
  Array.isArray(words) &&
    words.forEach((word) => {
      if (word.length <= 5) {
        easy.push(word);
      } else if (word.length > 5 && word.length < 8) {
        medium.push(word);
      } else {
        hard.push(word);
      }
    });

  try {
    await set("isDataAvailable", true);
    await set("easy", easy);
    await set("medium", medium);
    await set("hard", hard);
  } catch (error) {
    console.log("Not able to set words in indexDB");
  }
};

const App = () => {
  get("isDataAvailable").then((res) => {
    !res && storeDataInIndexDb(words);
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Layout words={easyDictWords} />
      </Provider>
    </div>
  );
};

export default App;
