---
title: 按symbol的K线(实时推)
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
    **请求**

    &nbsp;

    语法: kline@\{symbol\},\{interval\}

    interval: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M

    示例: kline@btc\_usdt,5m

    &nbsp;
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: "{\r\n    \"topic\": \"kline\", \r\n    \"event\": \"kline@btc_usdt,5m\", \r\n    \"data\": {\r\n        \"s\": \"btc_usdt\",       // symbol 交易对\r\n        \"t\": 1656043200000,    // time 时间\r\n        \"i\": \"5m\",             // interval 间隔\r\n        \"o\": \"44000\",          // open 开盘价\r\n        \"c\": \"50000\",          // close 收盘价\r\n        \"h\": \"52000\",           // high 最⾼价\r\n        \"l\": \"36000\",           // low 最低价\r\n        \"q\": \"34.2\",           // qty 成交量\r\n        \"v\": \"230000\"           // volume 成交额\r\n    }\r\n}"
        title: Response
        language: json
---
