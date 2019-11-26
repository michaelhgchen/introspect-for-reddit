import BaseApp from "next/app";
import Head from "next/head";

export default class App extends BaseApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>reddit upvotes</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}