import React, { Component } from 'react';
import styles from '../less/say.less';
import { Timeline } from 'antd';
import App from "../components/App"
import baseInitialProps from "../InitialProps/baseInitialProps"

const say = ({ says }) => {
  const list = says.list || []
  return (
    <App>
      <Timeline pending="Recording...">
        {list.map((x, index) =>
          <Timeline.Item key={index}>
            <div className={styles.articalCard}>
              <div className={styles.articalCardBody} dangerouslySetInnerHTML={{ __html: x.content }} ></div>
              <div className={styles.date}>
                发表于：{x.date}
              </div>
            </div>
          </Timeline.Item>
        )}
      </Timeline>
    </App>
  );
}

say.getInitialProps = async ({ req, query}) => {
  const { articals, visitors, userAgent } = await baseInitialProps(req, query)

  return { userAgent, visitors, articals, says }
}

export default say
