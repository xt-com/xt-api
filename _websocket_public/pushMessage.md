---
title: Push message format
position_number: 4
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
content_markdown:
left_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trade\",             \r\n    \"event\": \"trade@btc_usdt\",    //title\r\n    \"data\": { }                   \r\n}"
        title: format
        language: javascript
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"trade\", \r\n    \"event\": \"trade@btc_usdt\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\", \r\n        \"i\": 6316559590087222000, \r\n        \"t\": 1655992403617, \r\n        \"p\": \"43000\", \r\n        \"q\": \"0.21\", \r\n        \"b\": true\r\n    }\r\n}"
        title: Example of transaction record (real-time push message)
        language: json
---
