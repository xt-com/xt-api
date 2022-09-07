---
title: 历史成交查询
position_number: 10
type: get
description: /v4/trade
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: 交易对，不传代表所有
        ranges:
    -
        name: bizType
        type: string
        mandatory: false
        default:
        description: "业务类型 \_SPOT-现货, LEVER-杠杆, FINANCE-理财, FUTURES_U-合约U本位, FUTURES_C-合约币本位, FUTURES_ALL-全币种合约"
        ranges:
    -
        name: orderSide
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
        ranges:
    -
        name: orderType
        type: string
        mandatory: false
        default:
        description: 订单类型   LIMIT-现价, MARKET-市价
        ranges:
    -
        name: orderId
        type: number
        mandatory: false
        default:
        description: 订单号
        ranges:
    -
        name: fromId
        type: number
        mandatory: false
        default:
        description: 分页起始ID
        ranges:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: 查询方向:PREV, NEXT
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default: '20'
        description: 限制数量,最大100
        ranges:
    -
        name: startTime
        type: number
        mandatory: false
        default:
        description: 开始时间 eg:1657682804112
        ranges:
    -
        name: endTime
        type: number
        mandatory: false
        default:
        description: 结束时间
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": {\r\n    \"hasPrev\": true,\r\n    \"hasNext\": true,\r\n    \"items\": [\r\n      {\r\n        \"symbol\": \"BTC_USDT\",  //交易对\r\n        \"tradeId\": \"6316559590087222001\",  //成交单号\r\n        \"orderId\": \"6216559590087220004\",  //订单号\r\n        \"orderSide\": \"BUY\",    //订单方向\r\n        \"orderType\": \"LIMIT\",  //订单类型\r\n        \"bizType\": \"SPOT\",    //业务类型\r\n        \"time\": 1655958915583,  //成交时间\r\n        \"price\": \"40000\",     //成交价格\r\n        \"quantity\": \"1.2\",    //成交数量\r\n        \"quoteQty\": \"48000\",   //成交金额\r\n        \"baseCurrency\": \"BTC\",  //标的币种类型\r\n        \"quoteCurrency\": \"USDT\",  //报价币种类型\r\n        \"fee\": \"0.5\",    //手续费资产金额\r\n        \"feeCurrency\": \"USDT\",  //手续费资产类型\r\n        \"takerMaker\": \"taker\"  //takerMaker\r\n      }\r\n    ]\r\n  }\r\n}"
        title: Response
        language: json
---
