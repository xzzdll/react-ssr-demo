import React from 'react';
import styles from '../less/time.less';
import { Timeline } from 'antd';
import App from "../components/App"
import baseInitialProps from "../InitialProps/baseInitialProps"

const TimeFile = ({ articals }) => {
  const list = articals.list || []
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

TimeFile.getInitialProps = async ({ req, query }) => {
  const { articals, visitors, userAgent } = await baseInitialProps(req, query)

  return { userAgent, visitors, articals }
}

export default TimeFile
