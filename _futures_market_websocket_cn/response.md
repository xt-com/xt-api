---
title: 行情推送
position_number: 5
type:
description:
parameters:
    -
        name:
        type:
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    指数价格inde.price： 
    ```js
    {
     "channel":"push.index.price",
     "data":{
       "s":"btc_usdt", //交易对
       "p":"50000",    //价格
       "t":123124124   //时间戳
      }
    }
    ```

    标记价格:
     ```js
     {
      "channel":"push.mark.price",
      "data":{
         "s":"btc_usdt", //交易对
         "p":"50000",    //价格
         "t":123124124   //时间戳
      }
     }
     ```



    成交:
    ```js
    {
     "channel":"push.deal",
     "data":{
        "s":"btc_index", //交易对
        "p":"50000",    //价格
        "a":"0.1"   //数量
        "m": "BID"   //成交方向  BID 买 ASK卖
        "t":123124124   //时间戳
     }
    }
    ```



    深度变更:
    ```js
    {
     "channel":"push.deep",
     "data":{
         "id":1 ,  //update Id
         "s":"btc_index", //交易对
         "ba":1 // 方向 1 bid 2 ask
         "p":"50000",    //价格
         "q":"0.1" , //数量
         "t":123124124   //时间戳
     }
    }
    ```



    资金费率:
     ```js
     {
      "channel":"push.fund.rate",
      "data":{
         "s":"btc_usdt", //交易对
         "r":"0.01",    // 资金费率
         "t":123124124   //时间戳
      }
    }
    ```



    24小时行情ticker:
    ```js
    {
     "channel":"push.ticker",
     "data":{
         "s":"btc_index", //交易对
         "o":"49000",     // open 开盘价
         "c":"50000",    //cloes 收盘价
         "h":"0.1",      //high 最高价
         "l":"0.1",       //low 最低价
         "a":"0.1",      //amount 成交量
         "v":"0.1",       //volume 成交额
         "ch":"0.21",   //change 涨跌幅

         "i":"0.21" ,   //index 指数价格

         "m":"0.21",   //mark 标记价格

         "bp":"0.21",   //bid price 买一价格

         "ap":"0.21" ,  //ask price 卖一价格
     }
    }
    ```



    24小时聚合行情agg.ticker:
    ```js
    {
     "channel":"push.agg.ticker",
     "data":{
         "s":"btc_index", //交易对
         "o":"49000", // open 开盘价
         "c":"50000",    //cloes 收盘价
         "h":"0.1", //high 最高价
         "l":"0.1", //low 最低价
         "a":"0.1", //amount 成交量
         "v":"0.1", //volume 成交额
         "ch":"0.21"   //change 涨跌幅
     }
    }
    ```



    K线
    ```js
    {
     "channel":"push.kline",
     "data":{
         "s":"btc_index", //交易对
         "o":"49000", // open 开盘价
         "c":"50000",    //cloes 收盘价
         "h":"0.1", //high 最高价
         "l":"0.1", //low 最低价
         "a":"0.1", //amount 成交量
         "v":"0.1", //volume 成交额
         "ch":"0.21",   //change 涨跌幅
         "t":123124124   //时间戳
     }
    }
    ```



    全量前50挡深度
    ```js
    {
     "channel":"push.deep.full",
      "data":{
          "s":"btc_index", //交易对
          "a":[["50000","0.1"],["50001","0.2"]],    //ask 卖单队列， [价格，数量]
          "b":[["49999","0.1"],["48888","0.2"]]   //bid 买单队列
     }
    }
    ```

left_code_blocks:
-
    code_block:
    title:
    language:
right_code_blocks:
-
    code_block:
    title:
    language:
---
