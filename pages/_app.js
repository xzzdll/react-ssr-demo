import App from 'next/app'
import React from 'react'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import root from "../models";

const reduxStore = createStore(root.rootReducer);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      // <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      // </Container>
    )
  }
}

export default MyApp