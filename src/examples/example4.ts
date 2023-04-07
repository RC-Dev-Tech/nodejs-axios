import axios from "axios";

// axios配合Promise.all()同時發出多請求的非同步應用寫法.
export class Example4 {

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
   await Promise.all([this.getUserA(),this.getUserB()])
      .then( (response) => {
         const userA = response[0].data;
         const userB = response[1].data;
         console.log(userA);
         console.log(userB);
      })
      .catch( error => {
         // 發生意外地處理.
         console.log(error);
     })
     .finally(() => {
        // 不論失敗成功皆會執行 
     });
  }
}