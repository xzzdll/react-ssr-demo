import React from 'react';
import styles from './index.less';
import { Icon } from 'antd';

const SideBar = ({ articalsLength, visitorsMount }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.card} style={{ height: '300px' }}>
        <img src='/static/20180828144419.jpg' alt="" />
        <div className={styles.word}>
          <p className={styles.title}>xzzdll</p>
          <p> 前端打字员</p>
          <p> 文章 - {articalsLength}&nbsp;&nbsp;|&nbsp;&nbsp;访问 - {visitorsMount} </p>
        </div>
      </div>
      <div className={styles.card} style={{ height: '100px' }}>
        <div className={styles.card_head}>
          <span className={styles.title}>
            FOLLOW ME
        </span>
        </div>
        <div className={styles.icon}>
          <a href="https://github.com/xzzdll" target="_blank">
            <Icon type="github" className={styles.iconItem} />
          </a>
          <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=634408262&website=www.oicqzone.com" target="_blank">
            <Icon type="qq" className={styles.iconItem} />
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card_head}>
          <span className={styles.title}>
            友情链接
        </span>
        </div>
        <div className={styles.friendLink}>
          <a href="http://laibh.top" target="_blank">赖同学</a>
          <a href="http://i-tech.tech" target="_blank">叶老师</a>
          <a href="http://www.cnblogs.com/cnyball" target="_blank">C++大佬</a>
          <a href="http://xiaojun1994.top" target="_blank">xiaojun</a>
          <a href="https://www.cnblogs.com/DarkInNight/" target="_blank">回忆踩着风</a>
        </div>
      </div>

    </div>
  );
}

export default SideBar
