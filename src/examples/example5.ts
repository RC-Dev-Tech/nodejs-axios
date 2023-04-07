import axios from "axios";

// axios同時發出多請求的非同步應用寫法.
// 類似 Promise All 用法
// 注意 then 後接 axios.spread
export class Example5 {

   async getUserA() {
      const postData = {
         name: 'userA',
         age: 28
       };
      return await axios.post('http://localhost:3001/api/user', postData)
  };
  
  async getUserB() {
      const postData = {
        name: 'userB',
        age: 24
      };
      return await axios.post('http://localhost:3001/api/user', postData)
  };


  async run() {
      axios.all([this.getUserA(),this.getUserB()])
      .then(axios.spread((resA, resB) => {
        console.log('FuncA 回傳結果', resA.data);
        console.log('FuncB 回傳結果', resB.data);
      }))
      .catch( error => {
         // 發生意外地處理.
         console.log(error);
     })
     .finally(() => {
        /* 不論失敗成功皆會執行 */ 
     });
  }
}