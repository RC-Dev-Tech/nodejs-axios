import axios from "axios";

export class Example1 {

    run(): void {
        const config = {
            method: 'get',
            baseURL: 'http://localhost:3001',
            url: '/api/user',
            'Content-Type': 'application/json',
        }
        
        axios(config)
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
}