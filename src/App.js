import React from "react";
import "./App.css"

import { action ,tv_series,comedy,horror} from './Urls';
import Banner from './Components/Banner/Banner';
import ItemList from './Components/ItemsList/ItemsList'

function App() {
  return (
    <div className="App">
      <Banner/>
      <ItemList url={action} title = "Action" isSmall />
      <ItemList url={comedy} title="Comedy" isSmall />
      <ItemList url={horror} title ="Horror" isSmall />
      <ItemList url={tv_series} title ="TV series" isSmall  />
    </div>
  );
}

export default App;
