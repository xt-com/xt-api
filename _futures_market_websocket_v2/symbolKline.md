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
                        "s":"btc_index", //trading pair
                        "o":"49000",     // opening price
                        "c":"50000",    //Closing price
                        "h":"0.1",      //highest price
                        "l":"0.1",       //lowest price
                        "a":"0.1",      //volume
                        "v":"0.1",       //Turnover
                        "ch":"0.21",   //Quote change
                        "t":123124124   //timestamp
                    }
                }
        title: Response
        language: json
---
