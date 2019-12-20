import React, { Component } from 'react';
import NextHead from "../layout/head"
import styles from '../less/App.less';
import { Icon, Row, Col } from 'antd';
import Foot from './foot';
import Head from './head';
import Siderbar from './sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    }
  }
  handleClick = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  }

  render() {
    const { articalsLength, visitorsMount,children } = this.props
    let button = null;
    if (this.state.sidebar) {
      button = <Icon type="double-right" className={styles.icon} style={{ color: "#fff" }} />;
    } else {
      button = <Icon type="double-left" className={styles.icon} />;
    }

    return (
      <>
      <NextHead></NextHead>
        <div className={styles.App} style={{ right: this.state.sidebar ? '160px' : '0px', width: '100%' }}>
            <Head></Head>
            <div className={styles.main}>
              <Row type="flex" justify="center">
              <Col md={14} sm={24} xs={24}>
                {children}
                </Col>
              </Row>
            </div>
            <Foot></Foot>
        </div>
        <div className={styles.side} style={{ right: this.state.sidebar ? '0' : '-320px' }}>
          <Siderbar articalsLength={articalsLength} visitorsMount={visitorsMount}></Siderbar>
        </div>
        <div className={styles.control} onClick={this.handleClick}>
          {button}
        </div>
        </>
    );
  }
}

export default App
