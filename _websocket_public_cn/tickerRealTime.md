---
title: ticker(实时推)
position_number: 11
type:
description: |+

parameters:
    -
        name:
        type: string
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
    **请求**

    语法: ticker@\{symbol\}

    示例: ticker@btc\_usdt
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"ticker\", \r\n    \"event\": \"ticker@btc_usdt\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",      // symbol 交易对\r\n        \"t\": 1657586700119,   // time 最后成交时间\r\n        \"cv\": \"-200\",         // priceChangeValue 24⼩时价格变化\r\n        \"cr\": \"-0.02\",        // priceChangeRate 24⼩时价格变化(百分⽐)\r\n        \"o\": \"30000\",         // open 第⼀笔\r\n        \"c\": \"39000\",         // close 最后⼀笔\r\n        \"h\": \"38000\",         // high 最⾼价\r\n        \"l\": \"40000\",         // low 最低价\r\n        \"q\": \"4\",             // quantity 成交量\r\n        \"v\": \"150000\",         // volume 成交额\r\n    }\r\n}"
        title: Response
        language: json
---
