---
title: 有限深度(周期推)
position_number: 9
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

    &nbsp;

    语法: depth@\{symbol\},\{levels\}

    levels: 5, 10, 20, 50

    示例: depth@btc\_usdt,20
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"depth\", \r\n    \"event\": \"depth@btc_usdt,20\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",        // symbol 交易对\r\n        \"t\": 1657699200000,     // time 时间戳\r\n        \"a\": [                  // asks 卖盘\r\n            [                   //[0]价格, [1]数量\r\n                \"34000\",        //价格\r\n                \"1.2\"           //数量 \r\n            ], \r\n            [\r\n                \"34001\", \r\n                \"2.3\"\r\n            ]\r\n        ], \r\n        \"b\": [                   // bids 买盘\r\n            [\r\n                \"32000\", \r\n                \"0.2\"\r\n            ], \r\n            [\r\n                \"31000\", \r\n                \"0.5\"\r\n            ]\r\n        ]\r\n    }\r\n}"
        title: Response
        language: json
---
