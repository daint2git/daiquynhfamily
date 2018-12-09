const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 6969

const { getFiles } = require('./connect.googleapis')

app.use(cors())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

const handleClientCall = folderId => (req, res) => {
  const params = { folderId }
  const { nextPage, nextPageToken } = req.query
  if (nextPage) params.pageToken = nextPageToken
  getFiles(params, (files, nextPageToken) => res.send({ files, nextPageToken }))
}

app.get('/api/chupcuoile', handleClientCall('1X4vLvMCyXBM_iVQKOWg8m_y4JvwwPxB5'))
app.get('/api/chupcuoitiec', handleClientCall('1KU7pMSg8VnQdQ7bUw5MvEZwckoVIhyB-'))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
