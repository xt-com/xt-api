---
title: 增量深度(实时推)
position_number: 10
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

    语法: depth\_update@\{symbol\}

    示例: depth\_update@btc\_usdt
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"depth_update\", \r\n    \"event\": \"depth_update@btc_usdt\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",    // symbol 交易对\r\n        \"i\": 123,           // updateId\r\n        \"a\": [               // asks 卖盘\r\n            [                // [0]价格, [1]数量\r\n                \"34000\",     //价格\r\n                \"1.2\"         //数量\r\n            ], \r\n            [\r\n                \"34001\", \r\n                \"2.3\"\r\n            ]\r\n        ], \r\n        \"b\": [                  // bids 买盘\r\n            [\r\n                \"32000\", \r\n                \"0.2\"\r\n            ], \r\n            [\r\n                \"31000\", \r\n                \"0.5\"\r\n            ]\r\n        ]\r\n    }\r\n}"
        title: Response
        language: json
---
