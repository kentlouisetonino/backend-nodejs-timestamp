require('dotenv').config()
import app from './app'

const PORT = process.env.PORT

// * listen for requests
app.listen(PORT, function () {
  console.log(`Server: http://localhost:${PORT}`)
})

