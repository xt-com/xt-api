---
title: K-line
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
    **request**

    &nbsp;

    format: kline@\{symbol\},\{interval\}

    interval: 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M

    eg: kline@btc\_usdt,5m
    
    rate: 1000ms

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
                        "s": "btc_usdt",        // symbol
                        "t": 1656043200000,     // time
                        "i": "5m",              // interval
                        "o": "44000",           // open price
                        "c": "50000",           // close price
                        "h": "52000",           // highest price
                        "l": "36000",           // lowest price
                        "q": "34.2",            // qty(quantity)
                        "v": "230000"           // volume
                    }
                }
        title: Response
        language: json
---
