import React, { Component, Children } from 'react';
import NextHead from "../layout/head"
import { connect } from 'react-redux';
import styles from '../less/App.less';
import { Button, Icon, Row, Col, Layout } from 'antd';
import Foot from './foot';
import Head from './head';
import Siderbar from './sidebar';

const {
  Header, Footer, Sider, Content,
} = Layout;

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list ? state.list : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'list:fetchList', payload: value })
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    }
  }

  fetchList = () => {
    this.props.fetchList(1)
  }
  handleClick = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  }

  componentWillReceiveProps(nextProps){

    //当路由切换时
    if(this.props.location !== nextProps.location){
        window.scrollTo(0,0)
    }
}

  render() {
    const { list,children } = this.props
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
          <Siderbar></Siderbar>
        </div>
        <div className={styles.control} onClick={this.handleClick}>
          {button}
        </div>
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
