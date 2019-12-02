import BaseApp from "next/app";
import Head from "next/head";

export default class App extends BaseApp {
  // TODO: https://github.com/zeit/next.js/issues/3065
  // public componentDidMount() {
  //   Router.beforePopState(({ as }) => {
  //     location.href = as;
  //     location.reload();
  //     return false;
  //   });
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>introspect for reddit</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
