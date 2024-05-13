const express = require('express')
const app = express()
const date = require('date-fns/addDays')

app.get('/', (request, response) => {
  const updatedDate = date(new Date(), 100)
  response.send(
    `${updatedDate.getDate()}/${
      updatedDate.getMonth() + 1
    }/${updatedDate.getFullYear()}`,
  )
})
module.exports = app
