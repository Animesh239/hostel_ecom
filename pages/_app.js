import Layout from "@/components/layout";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;