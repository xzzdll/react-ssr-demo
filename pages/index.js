import App from "../components/App"
import HomeView from "../components/home"
import { articals as getarticals } from "../service/api"

const home = ({ articals }) => {
  return <>
    <App>
      <HomeView articals={articals}></HomeView>
    </App>
  </>
}

home.getInitialProps = async ({ req, query }) => {
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

export default home