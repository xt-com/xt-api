---
title: K-line according to symbol(real-time push) 
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
    **request**

    &nbsp;

    format: kline@\{symbol\},\{interval\}

    interval: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M

    eg: kline@btc\_usdt,5m

    &nbsp;
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"kline\", \r\n    \"event\": \"kline@btc_usdt,5m\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",       // symbol\r\n        \"t\": 1656043200000,    // time\r\n        \"i\": \"5m\",             // interval\r\n        \"o\": \"44000\",          // open price\r\n        \"c\": \"50000\",          // close price\r\n        \"h\": \"52000\",           // highest price\r\n        \"l\": \"36000\",           // lowest price\r\n        \"q\": \"34.2\",           // qty(quantity)\r\n        \"v\": \"230000\"           // volume\r\n    }\r\n}"
        title: Response
        language: json
---
