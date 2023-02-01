---
title: K线
position_number: 8
type:
description: 

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
    
    速率: 1000ms

    &nbsp;
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                        "topic": "kline",
                        "event": "kline@btc_usdt,5m",
                            "data": {
                            "s": "btc_usdt",       // symbol 交易对
                            "t": 1656043200000,    // time 时间
                            "i": "5m",             // interval 间隔
                            "o": "44000",          // open 开盘价
                            "c": "50000",          // close 收盘价
                            "h": "52000",          // high 最⾼价
                            "l": "36000",          // low 最低价
                            "q": "34.2",           // qty 成交量
                            "v": "230000"          // volume 成交额
                            }
                }
        title: Response
        language: json
---
