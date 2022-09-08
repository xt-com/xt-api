---
title: Change of order
position_number: 7
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

    format: order

    eg: order
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"order\", \r\n    \"event\": \"order\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",            // symbol\r\n        \"t\": 1656043204763,         // time happened time\r\n        \"i\": \"6216559590087220004\",  // orderId\r\n        \"st\": \"PARTIALLY_FILLED\",    // state\r\n        \"eq\": \"2\",                  // executedQty executed quantity\r\n        \"ap\": \"30000\"                 // avg price\r\n    }\r\n}"
        title: push
        language: json
---
