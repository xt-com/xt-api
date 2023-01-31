---
title: 行情订阅
position_number: 4
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
    订阅24小时行情 ticker：
    ```js
    {
     "req":"sub_ticker",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```
    ps: symbol 非必传，不传则订阅所有交易对

    取消订阅24小时行情: 
    ```js
    {
     "req":"unsub_ticker"
    }
    ```


    K线订阅:
    ```js
    {
     "req":"sub_kline",
     "symbol":"btc_usdt","type":"1m"
    }
    ```

    ps:K线订阅type类型:  1m 5m 15m 30m 1h 4h 1d  1w 

    K线取消订阅:
    ```js
    {
     "req":"unsub_kline"
    }
    ```



    订阅24小时聚合行情 aggTicker：
    ```js
    {
     "req":"sub_agg_ticker",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps: symbol 非必传，不传则订阅所有交易对

    取消24小时聚合行情订阅:
    ```js
    {
     "req":"unsub_agg_ticker"
    }
    ```



    指数价格订阅：
    ```js
    {
     "req":"sub_index_price",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps: symbol 非必传，不传则订阅所有交易对

    取消指数价格订阅：
    ```js
    {
     "req":"unsub_index_price"
    }
    ```

    标记价格订阅：
    ```js
    {
     "req":"sub_mark_price",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```
    ps: symbol 非必传，不传则订阅所有交易对

    取消标记价格订阅：
    ```js
    {
     "req":"unsub_mark_price"
    }
    ```

    订阅交易对：
    ```js
     {
      "req":"sub_symbol",
      "symbol":"btc_usdt"
     }
    ```

    ps:订阅交易对之后，会推送这个交易对的index.price、mark.price、ticker、agg.ticker、deal、deep、deep.full、fund.rate的消息

    取消交易对订阅:
    ```js
    {
     "req":"unsub_symbol"
    }
    ```

    订阅多交易对深度：
    ```js
    {
     "req":"sub_depth",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps:多交易对深度订阅，交易对以逗号隔开，最多订阅十个交易对深度，会推送所订阅的交易对的deep、deep.full的消息



    sub_mark_price、sub_index_price、sub_agg_ticker、sub_ticker批量订阅每3秒推送一次

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
