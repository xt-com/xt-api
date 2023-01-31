---
title: Market Information Push
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
    Index price:
    ```js
    {
     "channel":"push.index.price",
     "data":{
       "s":"btc_usdt", //trading pair
       "p":"50000",    //price
       "t":123124124   //timestamp
      }
    }
    ```

    Mark price:
     ```js
     {
      "channel":"push.mark.price",
      "data":{
         "s":"btc_usdt", //trading pair
         "p":"50000",    //price
         "t":123124124   //timestamp
      }
     }
     ```



    Deal:
    ```js
    {
     "channel":"push.deal",
     "data":{
        "s":"btc_index", //trading pair
        "p":"50000",    //price
        "a":"0.1"   //Quantity
        "m": "BID"   //Deal side  BID:Buy ASK:Sell
        "t":123124124   //timestamp
     }
    }
    ```



    Change depth:
    ```js
    {
     "channel":"push.deep",
     "data":{
         "id":1 ,  //update Id
         "s":"btc_index", //trading pair
         "ba":1 // 方向 1 bid 2 ask
         "p":"50000",    //price
         "q":"0.1" , //Quantity
         "t":123124124   //timestamp
     }
    }
    ```



    Fund fee:
     ```js
     {
      "channel":"push.fund.rate",
      "data":{
         "s":"btc_usdt", //Trading pair
         "r":"0.01",    // Fund fee
         "t":123124124   //timestamp
      }
    }
    ```



    24-hour market information:
    ```js
    {
     "channel":"push.ticker",
     "data":{
         "s":"btc_index", //trading pair
         "o":"49000",     // opening price
         "c":"50000",    //Closing price
         "h":"0.1",      //highest price
         "l":"0.1",       //lowest price
         "a":"0.1",      //volume
         "v":"0.1",       //Turnover
         "ch":"0.21",   //Quote change

         "i":"0.21" ,   //index price

         "m":"0.21",   //mark price

         "bp":"0.21",   //bid price

         "ap":"0.21" ,  //ask price
     }
    }
    ```



    Subscribe to the aggregated 24-hour market information agg.ticker:
    ```js
    {
     "channel":"push.agg.ticker",
     "data":{
         "s":"btc_index", //trading pair
         "o":"49000",     // opening price
         "c":"50000",    //Closing price
         "h":"0.1",      //highest price
         "l":"0.1",       //lowest price
         "a":"0.1",      //volume
         "v":"0.1",       //Turnover
         "ch":"0.21",   //Quote change
     }
    }
    ```



    Kline
    ```js
    {
     "channel":"push.kline",
     "data":{
         "s":"btc_index", //trading pair
         "o":"49000",     // opening price
         "c":"50000",    //Closing price
         "h":"0.1",      //highest price
         "l":"0.1",       //lowest price
         "a":"0.1",      //volume
         "v":"0.1",       //Turnover
         "ch":"0.21",   //Quote change
         "t":123124124   //timestamp
     }
    }
    ```



    Full first 50 block depth
    ```js
    {
     "channel":"push.deep.full",
      "data":{
          "s":"btc_index", //trading pair
          "a":[["50000","0.1"],["50001","0.2"]],    //ask sell order queue,[price, quantity]
          "b":[["49999","0.1"],["48888","0.2"]]   //bid buy queue
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
