import css from "../less/index.less"
import Head from "../layout/head"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getVisitorMount } from "../service/api.js";

const home = ({ count }) => {
  const visitors = useSelector(state => state.visitors)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'visitors:set', payload: count })
  }, [])

  return <>
    <Head></Head>
    <div className={css.example}>Welcome to next.js!{visitors}</div>
  </>
}

home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const { count } = await getVisitorMount()

  return { userAgent, count }
}

export default home