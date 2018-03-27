
import fetchData from './fetch-data'


var list = {
  getListData(params){
   return fetchData.get("search/?e=222&page=1",params)
 }
}



//提供各种各样数据交换的接口
export {list}