const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { getFiles } = require('./connect.googleapis')

const app = express()
const port = process.env.PORT || 9696
const origin =
  process.env.NODE_ENV === 'production'
    ? 'https://daiquynhfamily.herokuapp.com'
    : 'http://localhost:6969'

app.use(cors({ credentials: true, origin }))
app.use(cookieParser())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

const handleClientCall = folderId => (req, res) => {
  const params = { folderId }
  const { nextPage } = req.query
  const { nextPageToken } = req.cookies

  if (nextPage && nextPageToken) params.pageToken = nextPageToken

  getFiles(params, (files, nextPageToken) => {
    if (nextPageToken) res.cookie('nextPageToken', nextPageToken)
    res.send(files)
  })
}

app.get('/api/trangchu', handleClientCall(''))
app.get('/api/chupcuoile', handleClientCall('1X4vLvMCyXBM_iVQKOWg8m_y4JvwwPxB5'))
app.get('/api/chupcuoitiec', handleClientCall('1KU7pMSg8VnQdQ7bUw5MvEZwckoVIhyB-'))
app.get('/api/chuphoian', handleClientCall(''))
app.get('/api/chupbaida', handleClientCall(''))
app.get('/api/chupsanbay', handleClientCall(''))
app.get('/api/chupstudio', handleClientCall(''))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build/index.html')))

app.listen(port, () => console.log(`Server listening on port ${port}`))
