---
title: ticker
position_number: 11
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

    语法: ticker@\{symbol\}

    示例: ticker@btc\_usdt
    
    速率: 1000ms
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "ticker", 
                    "event": "ticker@btc_usdt", 
                    "data": {
                        "s": "btc_usdt",      // symbol 交易对
                        "t": 1657586700119,   // time 最后成交时间
                        "cv": "-200",         // priceChangeValue 24⼩时价格变化
                        "cr": "-0.02",        // priceChangeRate 24⼩时价格变化(百分⽐)
                        "o": "30000",         // open 第⼀笔
                        "c": "39000",         // close 最后⼀笔
                        "h": "38000",         // high 最⾼价
                        "l": "40000",         // low 最低价
                        "q": "4",             // quantity 成交量
                        "v": "150000",        // volume 成交额
                    }
                }
        title: Response
        language: json
---
