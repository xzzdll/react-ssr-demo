import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getVisitorMount } from "../service/api.js";
import App from "../components/App"
import HomeView from "../components/home"

const home = ({ count }) => {
  const visitors = useSelector(state => state.visitors)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'visitors:set', payload: count })
  }, [])

  return <>
    <App>
        <HomeView></HomeView>
    </App>
    {/* <div className={css.example}>Welcome to next.js!{visitors}</div> */}
  </>
}

home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const { count } = await getVisitorMount()

  return { userAgent, count }
}

export default home