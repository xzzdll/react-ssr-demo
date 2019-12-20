import App from "../components/App"
import HomeView from "../components/home"
import { getArticals, getVisitorMount } from "../service/api"

const home = ({ articals, visitors, userAgent }) => {
  return <>
    <App articalsLength={articals.totalRows || 0} visitorsMount={visitors.count || 0} userAgent={userAgent}>
      <HomeView articals={articals}></HomeView>
    </App>
  </>
}

home.getInitialProps = async ({ req, query }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const {
    currentPage = 1, pageSize = 10,
  } = query

  const [articals, visitors] = await Promise.all([getArticals({
    currentPage,
    pageSize
  }), getVisitorMount()])

  return { articals, visitors, userAgent }
}

export default home