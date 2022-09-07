---
title: 单笔订单获取
position_number: 1
type: get
description: /v4/order/order
parameters:
    -
        name: orderId
        type: number
        mandatory: false
        default:
        description: 订单ID
        ranges:
    -
        name: clientOrderId
        type: string
        mandatory: false
        default:
        description: 客户端订单号
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String orderGet(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"symbol\": \"BTC_USDT\",   //交易对\r\n    \"orderId\": \"6216559590087220004\",  //订单号\r\n    \"clientOrderId\": \"16559590087220001\",  //客户端订单号\r\n    \"baseCurrency\": \"string\",   //标的币种\r\n    \"quoteCurrency\": \"string\",   //报价币种\r\n    \"side\": \"BUY\",   //订单方向 BUY-买,SELL-卖\r\n    \"type\": \"LIMIT\",  //订单类型  LIMIT-现价,MARKET-市价 \r\n    \"timeInForce\": \"GTC\",  //有效方式  GTC,IOC,FOK,GTX\r\n    \"price\": \"40000\",   //价格\r\n    \"origQty\": \"2\",     //原始数量\r\n    \"origQuoteQty\": \"48000\",  //原始金额\r\n    \"executedQty\": \"1.2\",   //已执行数量\r\n    \"leavingQty\": \"string\",  //待执行数量（若撤单或下单拒绝，该值为0）\r\n    \"tradeBase\": \"2\",      //成交标的(成交数量)\r\n    \"tradeQuote\": \"48000\",  //成交报价(成交金额)\r\n    \"avgPrice\": \"42350\",    //成交均价\r\n    \"fee\": \"string\",   //手续费\r\n    \"feeCurrency\": \"string\",   //手续费币种\r\n    \"state\": \"NEW\",    //订单状态 NEW-新建,PARTIALLY_FILLED-部分成交,FILLED-全部成交,CANCELED-用户撤单,REJECTED-下单失败,EXPIRED-过期(time_in_force撤单或溢价撤单)\r\n    \"time\": 1655958915583,   //订单时间\r\n    \"updatedTime\": 1655958915583  //订单更新时间\r\n  }\r\n}"
        title: Response
        language: json
---
