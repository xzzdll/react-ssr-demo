const next = require('next')
const micro = require('micro')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleNextRequests = app.getRequestHandler()

app.prepare().then(() => {
  const server = micro((req, res) => {
    // Add assetPrefix support based on the hostname

    handleNextRequests(req, res)
  })

  server.listen(3009, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:3009`)
  })
})