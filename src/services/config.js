
import axios from "axios"

const mock = false
const serverUrl = '/loho'
const mockUrl = '/static/mock'
const baseUrl = mock?mockUrl:serverUrl

axios.defaults.baseURL = baseUrl; //"http://localhost:8000/admin"+"/product/getListData"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //form-data
