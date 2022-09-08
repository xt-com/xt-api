---
title: Order filled
position_number: 8
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
    param

    format: trade

    eg: trade
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trade\", \r\n    \"event\": \"trade\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",              // symbol\r\n        \"t\": 1656043204763,            //time \r\n        \"i\": \"6316559590087251233\",    // tradeId\r\n        \"oi\": \"6216559590087220004\",    // orderId\r\n        \"p\": \"30000\",                   // trade price\r\n        \"q\": \"3\",                       // qty quantity\r\n        \"v\": \"90000\"                    //volumn trade amount\r\n    }\r\n}"
        title: push
        language: json
---
