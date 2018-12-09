const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 6969

const { getFiles } = require('./connect.googleapis')

app.use(cors())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/api/chupcuoile', (req, res) => {
  const folderId = '1X4vLvMCyXBM_iVQKOWg8m_y4JvwwPxB5'
  getFiles(folderId, files => res.send(files))
})

app.get('/api/chupcuoitiec', (req, res) => {
  const folderId = '1KU7pMSg8VnQdQ7bUw5MvEZwckoVIhyB-'
  getFiles(folderId, files => res.send(files))
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
