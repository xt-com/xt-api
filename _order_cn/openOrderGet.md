---
title: 当前挂单查询
position_number: 7
type: get
description: /v4/open-order
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
        name: side
        type: string
        mandatory: false
        default:
        description: BUY-买,SELL-卖
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
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"string\",\r\n  \"ma\": [\r\n    {}\r\n  ],\r\n  \"result\": [      //字段信息参考单笔订单获取接口\r\n    {\r\n      \"symbol\": \"BTC_USDT\",\r\n      \"orderId\": \"6216559590087220004\",\r\n      \"clientOrderId\": \"16559590087220001\",\r\n      \"baseCurrency\": \"string\",\r\n      \"quoteCurrency\": \"string\",\r\n      \"side\": \"BUY\",\r\n      \"type\": \"LIMIT\",\r\n      \"timeInForce\": \"GTC\",\r\n      \"price\": \"40000\",\r\n      \"origQty\": \"2\",\r\n      \"origQuoteQty\": \"48000\",\r\n      \"executedQty\": \"1.2\",\r\n      \"leavingQty\": \"string\",\r\n      \"tradeBase\": \"2\",\r\n      \"tradeQuote\": \"48000\",\r\n      \"avgPrice\": \"42350\",\r\n      \"fee\": \"string\",\r\n      \"feeCurrency\": \"string\",\r\n      \"state\": \"NEW\",\r\n      \"time\": 1655958915583,\r\n      \"updatedTime\": 1655958915583\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
