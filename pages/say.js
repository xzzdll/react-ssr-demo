import React, { Component } from 'react';
import styles from '../less/say.less';
import { Timeline } from 'antd';
import App from "../components/App"
import { says as getSays } from "../service/api"

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

say.getInitialProps = async (ctx) => {
  const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent

  const says = await getSays()

  return { userAgent, says }
}

export default say
