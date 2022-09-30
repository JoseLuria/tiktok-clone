import "../sass/index.scss";
import { AppWrapper } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
