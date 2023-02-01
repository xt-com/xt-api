---
title: Market Information Subscription
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
    Subscribe to the 24-hour market information ticker：
    ```js
    {
     "req":"sub_ticker",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```
    ps: Symbol field is not required to pass parameters, if don't pass parameters, subscribe to all trading pairs

    Unsubscribe to the aggregated 24-hour market information:
    ```js
    {
     "req":"unsub_ticker"
    }
    ```


    Kline subscription:
    ```js
    {
     "req":"sub_kline",
     "symbol":"btc_usdt","type":"1m"
    }
    ```

    Type of Kline subscription:1m 5m 15m 30m 1h 4h 1d  1w 

    Kline unsubscription:
    ```js
    {
     "req":"unsub_kline"
    }
    ```



    Subscribe to the aggregated 24-hour market information aggTicker：
    ```js
    {
     "req":"sub_agg_ticker",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps: Symbol field is not required to pass parameters, if don't pass parameters, subscribe to all trading pairs

    Unsubscribe to the aggregated 24-hour market information:
    ```js
    {
     "req":"unsub_agg_ticker"
    }
    ```



    Index price subscription:
    ```js
    {
     "req":"sub_index_price",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps: Symbol field is not required to pass parameters, if don't pass parameters, subscribe to all trading pairs

    Index price unsubscription:
    ```js
    {
     "req":"unsub_index_price"
    }
    ```

    Mark price subscription:
    ```js
    {
     "req":"sub_mark_price",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```
    ps: Symbol field is not required to pass parameters, if don't pass parameters, subscribe to all trading pairs

    Mark price unsubscription:
    ```js
    {
     "req":"unsub_mark_price"
    }
    ```

    Trading pairs subscription:
    ```js
     {
      "req":"sub_symbol",
      "symbol":"btc_usdt"
     }
    ```

    After subscribing to trading pairs, news of the index.price、mark.price、ticker、agg.ticker、deal、deep、deep.full、fund.rate of the trading pair will be pushed.

    Trading pairs unsubscription:
    ```js
    {
     "req":"unsub_symbol"
    }
    ```

    Subscribe to Multi-Pair Depth:
    ```js
    {
     "req":"sub_depth",
     "symbol":"btc_usdt,eth_usdt"
    }
    ```

    ps:Multiple trading pair depth subscriptions, trading pairs are separated by commas, and a maximum of ten trading pair depths can be subscribed, and the deep and deep.full messages of the subscribed trading pairs will be pushed.



    sub_mark_price、sub_index_price、sub_agg_ticker、sub_ticker Bulk subscription pushes every 3 seconds

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
