import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../less/time.less';
import { Timeline, Button } from 'antd';
import App from "../components/App"

const mapStateToProps = (state, ownProps) => {
  return {
    articals: state.articals ? state.articals : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'articals:fetchList', payload: value })
    }
  }
}

class TimeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  fetchList = () => {
    this.props.fetchList()
  }

  componentDidMount() {
    this.fetchList()
  }


  render() {
    const list = this.props.articals.list || []
    return (
      <App>
        <Timeline pending="Recording...">
          {list.map((x, index) =>
            <Timeline.Item key={index}>
              <div className={styles.articalCard}>
            <div className={styles.articalCardDate}>
              {x.date}
            </div>
            <div className={styles.articalCardBody}>
              {x.title}
            </div>
          </div>
            </Timeline.Item>
          )}
        </Timeline>
      </App>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFile)
