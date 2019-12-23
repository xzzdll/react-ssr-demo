import { getArticals, getVisitorMount,getSays } from "../service/api"
export default async (req,query) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

  const {
    currentPage = 1, pageSize = 10, id
  } = query

  const [articals, visitors, says] = await Promise.all([getArticals({
    currentPage,
    pageSize,
    id
  }), getVisitorMount(), getSays()])

  return { articals, visitors, userAgent, says }
}