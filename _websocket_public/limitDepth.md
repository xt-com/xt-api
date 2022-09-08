---
title: Limited depth (cycle push)
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
    **request**

    &nbsp;

    format: depth@\{symbol\},\{levels\}

    levels: 5, 10, 20, 50

    eg: depth@btc\_usdt,20
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"depth\", \r\n    \"event\": \"depth@btc_usdt,20\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",        // symbol\r\n        \"t\": 1657699200000,     // time\r\n        \"a\": [                  // asks(sell order)\r\n            [                   //[0]price, [1]quantity\r\n                \"34000\",        //price\r\n                \"1.2\"           //quantity \r\n            ], \r\n            [\r\n                \"34001\", \r\n                \"2.3\"\r\n            ]\r\n        ], \r\n        \"b\": [                   // bids(buy order)\r\n            [\r\n                \"32000\", \r\n                \"0.2\"\r\n            ], \r\n            [\r\n                \"31000\", \r\n                \"0.5\"\r\n            ]\r\n        ]\r\n    }\r\n}"
        title: Response
        language: json
---
