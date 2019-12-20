import React, { useEffect, useRef } from 'react';
import styles from '../less/artical.less';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import App from "../components/App"
import { getArticals } from "../service/api"

const articalDetail = ({ detail }) => {
  const list = detail.list ? detail.list[0] : {}
  const codeEl = useRef(null);

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    let blocks = codeEl.current.querySelectorAll('pre');
    blocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  }, [])

  return (
    <App>
      <div className={styles.articalCard}>
        <div className={styles.articalCardTitle}>{list.title}</div>
        <div className={styles.articalCardBody}>
          <div className="ql-snow">
            <div className="ql-editor">
              <div dangerouslySetInnerHTML={{ __html: list.content }} ref={codeEl}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}

articalDetail.getInitialProps = async (ctx) => {
  const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent

  const {
    id
  } = ctx.query

  const detail = await getArticals({
    currentPage: 1,
    pageSize: 10,
    id
  })

  return { userAgent, detail }
}

export default articalDetail

