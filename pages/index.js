import App from "../components/App"
import HomeView from "../components/home"
import baseInitialProps from "../InitialProps/baseInitialProps"

const home = ({ articals, visitors, userAgent }) => {
  return <>
    <App articalsLength={articals.totalRows || 0} visitorsMount={visitors.count || 0} userAgent={userAgent}>
      <HomeView articals={articals}></HomeView>
    </App>
  </>
}

home.getInitialProps = async ({ req, query }) => {
  const { articals, visitors, userAgent } = await baseInitialProps(req, query)

  return { articals, visitors, userAgent }
}

export default home