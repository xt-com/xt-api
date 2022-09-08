---
title: Get latest prices ticker
position_number: 5
type: get
description: /v4/public/ticker/price
parameters:
    -
        name: symbol
        type: string
        mandatory: false
        default:
        description: trading pair  eg:btc_usdt
        ranges:
    -
        name: symbols
        type: string
        mandatory: false
        default:
        description: 'Collection of trading pairs eg: ["BTC_USDT", "ETH_USDT"]'
        ranges:
content_markdown:
left_code_blocks:
    -
        code_block: |-
            public String price(){


            }
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n  \"rc\": 0,\r\n  \"mc\": \"SUCCESS\",\r\n  \"ma\": [],\r\n  \"result\": [\r\n    {\r\n      \"s\": \"btc_usdt\",   //symbol\r\n      \"p\": \"9000.0000\",   //price\r\n      \"t\": 1661856036925   //time\r\n    }\r\n  ]\r\n}"
        title: Response
        language: json
---
