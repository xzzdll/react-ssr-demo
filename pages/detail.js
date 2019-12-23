import React, { useEffect, useRef } from 'react';
import styles from '../less/artical.less';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import App from "../components/App"
import baseInitialProps from "../InitialProps/baseInitialProps"

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

articalDetail.getInitialProps = async ({ req, query}) => {
  const { articals:detail, visitors, userAgent } = await baseInitialProps(req, query)

  return { userAgent, visitors, detail, says }
}

export default articalDetail

