const axios = require('axios')

const accessToken = process.env.DIALOGFLOW_ACCESS_TOKEN
const baseURL = 'https://api.dialogflow.com/v1/query?v=20150910'

module.exports = {
  send (message) {
    const data = {
      query: message,
      lang: 'en',
      sessionId: '123456789!@#$%'
    }

    return axios.post(baseURL, data, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  }
}