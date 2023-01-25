import React from "react";
import Header from "./components/Navbar/Header";
import MainRoute from "./routes/MainRoute";
import "./App.css";
import { Provider } from "react-redux";
import store from "./features/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
