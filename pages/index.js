import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getVisitorMount } from "../service/api.js";
import App from "../components/App"
import HomeView from "../components/home"
import { articals as getarticals } from "../service/api"

const home = ({ articals }) => {
  // const visitors = useSelector(state => state.visitors)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch({ type: 'visitors:set', payload: count })
  // }, [])

  return <>
    <App>
      <HomeView articals={articals}></HomeView>
    </App>
    {/* <div className={css.example}>Welcome to next.js!{visitors}</div> */}
  </>
}

home.getInitialProps = async ({ req,query }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const {
    currentPage = 1, pageSize = 10,
  } = query

  const articals = await getarticals({
    currentPage,
    pageSize
  })

  // const { count } = await getVisitorMount()

  return { userAgent, articals }
}

export default home