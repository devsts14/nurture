import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout";
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
