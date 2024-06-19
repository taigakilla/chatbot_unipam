const { createServer } = require('http')

const { parse } = require('url')

const next = require('next')

const dev = false

const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT ?? 3000

app.prepare().then(() => {
  createServer((req, res) => {
    const pasedUrl = parse(req.url, true)
    handle(req, res, pasedUrl)
  }).listen(port, () => {
    console.log(`Server has been started... ` + port)
  })
})
