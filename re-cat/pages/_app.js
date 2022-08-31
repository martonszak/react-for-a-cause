import "../styles/globals.css";
import Layout from "./components/layout";
import "../styles/transition.css";
import Transition from "./Transition";
import GoodMethod from './goodmethod';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  );
}
export default MyApp;
