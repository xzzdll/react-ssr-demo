import React from 'react';
import styles from '../less/time.less';
import { Timeline } from 'antd';
import App from "../components/App"
import { articals as getarticals } from "../service/api"

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
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const {
    currentPage = 1, pageSize = 10,
  } = query

  const articals = await getarticals({
    currentPage,
    pageSize
  })

  return { userAgent, articals }
}

export default TimeFile
