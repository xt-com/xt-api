---
title: 用户推送
position_number: 6
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
    用户推送事件：
    余额变更
    ```js
    {"channel":"user.balance",
      "data":{
           "coin":"usdt",  

            "underlyingType":1, //  1:币本位，2:U本位
            "walletBalance":"123", // 钱包余额
            "openOrderMarginFrozen":"123", // 订单冻结
            "isolatedMargin":"213"  // 逐仓保证金
            "crossedMargin":"0" //全仓保证金
     }}
     ```


     仓位变更
     ```js
      {"channel":"user.position",
       "data":{
           "symbol":"btc_usdt",
           "contractType": "PERPUTUAL", //合约类型，PERPUTUAL，DELIVERY
           "positionType": "ISOLATED",  // "ISOLATED", "CROSSED"
           "positionSide": "LONG",
           "positionSize":"123",  // 持仓数量

           "closeOrderSize": "100",  //  平仓挂单数量

           "availableCloseSize": "23",  //  可平仓张数

           "realizedProfit": "123"   //  已实现盈亏

           "entryPrice":"213",   //  开仓均价
           "isolatedMargin":"213",  //  逐仓保证金

           "openOrderMarginFrozen": "123", //  开仓订单占用保证金
           "underlyingType": ""// COIN_BASED, U_BASED
           "leverage":20  // 杠杆倍数
    }}
    ```
           

    用户成交:
    ```js
    {"channel":"user.trade",
      "data":{
          "orderId":"12312312",  // 订单id
          "price":"34244",  // 价格
          "quantity":"123", // 数量
          "marginUnfrozen":"123", // 保证金解冻数量
          "timestamp":1731231231 // 时间戳
    }}
    ```
             

    用户订单:
    ```js
    {"channel":"user.order",
      "data":{

          "symbol":"btc_usdt",  // 交易对
          "orderId": "1234", //订单id
          "origQty": "34244", // 下单数量
          "avgPrice": "123", // 成交均价
          "price": "1111", //下单价格
          "executedQty":"34244", // 已成交数量
          "orderSide": "BUY", // BUY, SELL
          "positionSide": "LONG", // LONG, SHORT
          "marginFrozen":"123", // 占用保证金
          "sourceType":"default", //  DEFAULT:普通订单， ENTRUST:计划委托，PROFIR:止盈止损

          "sourceId" : "1231231",// 条件订单出发ID
          "state": "", // 订单状态 NEW：新建订单;未成交; PARTIALLY_FILLED：部分成交；PARTIALLY_CANCELED：部分撤销；FILLED：全部成交；CANCELED：已撤销；REJECTED：下单失败；EXPIRED：已过期
          "createTime": 1731231231 // 时间戳
    }}
    ```



    用户消息:
    ```js
    {"channel":"user.notify",
      "data":{   

         "symbol":"btc_usdt",
         "positionType": "ISOLATED",  
         "positionSide": "LONG",
         "positionSize":"123",  // 持仓数量

         "notifyType": "WARN",  // 通知类型:  WARN：告警，即将被强平，PARTIAL：部分强平，LIQUIDATION：全部强平，ADL：自动减仓

    }}
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
