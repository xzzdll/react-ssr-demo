import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../less/home.less';
import { Pagination } from 'antd';
import Router from 'next/router'
import { articals as getarticals } from "../service/api"


const home = ({ articals = {} }) => {
  // const { list = [], totalRows = 0 } = useSelector(state => state.articals)
  const { list = [], totalRows = 0 } = articals
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const dispatch = useDispatch()

  const onShowSizeChange = (current, size) => {
    setCurrentPage(current)
    setPageSize(size)
  }

  const showDetail = (id) => {
    Router.push(`/detail/${id}`)
  }

  useEffect(() => {
    // (async () => {
    //   const articalsList = await getarticals({
    //     currentPage,
    //     pageSize
    //   })
    //   dispatch({ type: "articals:set", payload: articalsList })
    // })()
    Router.push(`/index?currentPage=${currentPage}&&pageSize=${pageSize}`)
  }, [currentPage,
    pageSize])

  return (
    <div className={styles.main}>
      {list.map((x, index) =>
        <div className={styles.articalCard} key={index}>
          <div className={styles.articalCardTitle}>{x.title}</div>
          <div className={styles.articalCardSubTitle}>
            <span>发表于:{x.date}</span>
            <span>标签:{x.type}</span>
            <span>浏览:{x.times}</span>
          </div>
          <div className={styles.articalCardBody} dangerouslySetInnerHTML={{ __html: x.content }}>
          </div>
          <div>....</div>
          <div className={styles.articalCardfoot} onClick={(e) => showDetail(x._id, e)}>
            <span>阅读全文 > ></span>
          </div>
        </div>
      )}
      <Pagination showSizeChanger onChange={onShowSizeChange} onShowSizeChange={onShowSizeChange} defaultCurrent={currentPage} total={totalRows} />
    </div>
  );
}

// home.getInitialProps = async ({ req, query }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

//   const {
//     currentPage = 1, pageSize = 10,
//   } = query

//   const articals = await getarticals({
//     currentPage,
//     pageSize
//   })

//   return { userAgent, articals }
// }

export default home