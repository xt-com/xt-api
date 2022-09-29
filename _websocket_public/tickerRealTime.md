---
title: ticker(real-time push)
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
    **request**

    format: ticker@\{symbol\}

    eg: ticker@btc\_usdt
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"ticker\", \r\n    \"event\": \"ticker@btc_usdt\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",      // symbol\r\n        \"t\": 1657586700119,   // time(Last transaction time)\r\n        \"cv\": \"-200\",         // priceChangeValue(24 hour price change)\r\n        \"cr\": \"-0.02\",        // priceChangeRate 24-hour price change (percentage)\r\n        \"o\": \"30000\",         // open price\r\n        \"c\": \"39000\",         // close price\r\n        \"h\": \"38000\",         // highest price\r\n        \"l\": \"40000\",         // lowest price\r\n        \"q\": \"4\",             // quantity\r\n        \"v\": \"150000\",         // volume\r\n   }\r\n}"
        title: Response
        language: json
---
