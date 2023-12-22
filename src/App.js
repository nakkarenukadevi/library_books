import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
