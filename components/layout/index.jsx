import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import store from "@/store";
import Footer from "../footer";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>Hostel-shop</title>
        </Head>
        <div className="flex flex-col min-h-[100vh]">
          <NextNProgress height={7} />
          <Header />
          <main className="flex-grow  md:mt-40">{children}</main>
          <Footer />
        </div>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position={"top-right"}
        />
      </ThemeProvider>
  </Provider>
  );
};

export default Layout;