import "./App.css";
// import UserContainer from "./contextAPI/UserContainer";
// import UserDetails from "./components/customHook/FindUsers";
import UserCityDetails from "./components/reduxThunk/UserCityDetails";
import { Provider } from "react-redux";
import { store } from "./redux-thunk/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserDetails /> */}
        {/* <UserContainer /> */}
        <UserCityDetails />
      </div>
    </Provider>
  );
}

export default App;
