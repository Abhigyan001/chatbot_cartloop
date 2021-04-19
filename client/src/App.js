//  Import dependencies

import "./App.css";

// Import redux components
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        hello
      </div>
    </Provider>
  );
}

export default App;
