import css from "./index.less"
import Head from "../layout/head"

export default () => {
  return <>
    <Head></Head>
    <div className={css.example}>Welcome to next.js!</div>
  </>
}