# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - axios
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

---

<!--ts-->
## 目錄:
* [簡介](#簡介)
* [實作範例](#實作範例)
* [Config參數說明](#Config參數說明)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---

## 簡介:
由於原本常用的***request***[^1]跟***request-parmire***[^2]已不在維護，<br>
且原生http的request還要另外處理非同步的部分，<br>
所以這邊改使用替代方案也是目前網路上最推崇的套件，也就是axios.<br>
- axios回傳的物件是Promise(fulfilled狀態)物件，所以我們可以用.then和.catch去處理成功和失敗結果。<br>

> 這邊的範例可以搭配[nodejs-express-rest-api](https://github.com/RC-Dev-Tech/nodejs-async-await)範例做為api的發送對象來使用.<br>

---

## 實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-axios/blob/main/src/examples/example1.ts) - axios的基本用法.
- [Example2](https://github.com/RC-Dev-Tech/nodejs-axios/blob/main/src/examples/example2.ts) - axios GER/POST使用.
- [Example3](https://github.com/RC-Dev-Tech/nodejs-axios/blob/main/src/examples/example3.ts) - 非同步應用 async/await.
- [Example4](https://github.com/RC-Dev-Tech/nodejs-axios/blob/main/src/examples/example4.ts) - 非同步多請求應用 Promise.all.
- [Example5](https://github.com/RC-Dev-Tech/nodejs-axios/blob/main/src/examples/example5.ts) - 非同步多請求應用 axios.all & axios.spread.

---

## Config參數說明:
```javascript
{
    // url 為必填
    url: '/users',

    // method 是發出 Request 時使用的方法
    method: 'get', // 默認為 get

    // baseURL 如果填寫就會被添加到 url 前面，除非 url 為絕對路徑
    baseURL: 'https://some-domain.com/api/',

    // 你可以在這個地方定義自己的 headers
    // 通常會拿來設定 Authorization、Content-Type
    headers: {'Content-Type': 'application/json'},

    // params 通常跟著 GET method 一起使用
    // 這裡填寫的參數會帶入 url 後面，ex : .../user?ID=123
    params: {
        ID: 123
    },

    // data 只適用於 POST、PUT、PATCH 這幾個 method
    // 主要作為 Request 傳送的資料
    data: {
        firstName: 'user'
    },

    // Request 時間超過 1000毫秒(1秒)後會被中止
    timeout: 1000,

    // 選項: 'arraybuffer', 'document', 'json', 'text', 'stream'
    // 瀏覽器才有 'blob'
    responseType: 'json', // 默認為 json

     // 限制 http 回應時的內容大小
    maxContentLength: 2000,
}
```

---

## 使用套件:
- axios

---

## 操作說明:
#### 1. 安裝套件[^3]
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---

## 切換範例:
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---

## 延伸項目:
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---

## 參考資料:
* [github - axios](https://github.com/axios/axios) <br>
* [axios 基本使用 & Config](https://ithelp.ithome.com.tw/articles/10212120) <br>
* [JavaScript基本功修練：axios基本語法與練習(GET、POST請求)](https://ithelp.ithome.com.tw/articles/10253259) <br>

---

<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->

---

## 備註：
[^1]: [npm request](https://www.npmjs.com/package/request) 已於2020年2月起，停止維護，並不在推薦使用.
[^2]: [npm request-promise](https://www.npmjs.com/package/request-promise) 已於2020年2月起，停止維護，並不在推薦使用.
[^3]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install axios --save` <br>
因為這些套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好
