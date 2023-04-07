import axios from "axios";
// axios本來就是使用asycn/await的方式去編寫.
// 所以這邊我們可以採用一些非同步的應用寫法.

export class Example3 {
  async run() {
     try{
        const response = await axios.get('http://localhost:3001/api/user');
        console.log(response.data);    // api回傳的資料.
        console.log(response.status);  // api的HTTP狀態碼.
        console.log(response.config);  // 這個Request的config.
     } catch(error){
        console.log(error)
     }
  }
}