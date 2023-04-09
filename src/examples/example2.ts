import axios from "axios";
export class Example2 {

    axios_get() {
        console.log('run axios get func ...');
        return axios.get('http://localhost:3001/api/user')
        .then( response => { 
            // 成功後的處理.
            console.log(response.data);    // api回傳的資料.
            console.log(response.status);  // api的HTTP狀態碼.
            console.log(response.config);  // 這個Request的config.
        })
        .catch( error => {
            // 發生意外地處理.
            console.log(error);
        })
        .finally(() => {
            /* 不論失敗成功皆會執行 */ 
        })
    }

    axios_post() {
        console.log('run axios post func ...');
        // 標頭設定.
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer <ACCESS_TOKEN>' 
            }
        };

        // 打給對方api所要帶過去的資料.
        const postData = {
          name: 'ricky',
          age: 18
        };
       
        axios.post('http://localhost:3001/api/user', postData, config )
            .then(response => {
                console.log(response.data);    // api回傳的資料.
                console.log(response.status);  // api的HTTP狀態碼.
                console.log(response.config);  // 這個Request的config.
            })
            .catch(error => {
              // 發生意外地處理.
              console.log(error);
            })
            .finally(() => {
                /* 不論失敗成功皆會執行 */ 
           });
    }


    run(): void {
       this.axios_get()
       .then(this.axios_post);
    }
}