---
title: 成交记录
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

    语法: trade@\{symbol\}

    示例: trade@btc\_usdt
    
    速率: 实时
left_code_blocks:
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade", 
                "event": "trade@btc_usdt", 
                "data": {
                    "s": "btc_usdt",          // symbol，交易对
                    "i": 6316559590087222000, // 成交ID
                    "t": 1655992403617,       // time，成交时间
                    "p": "43000",             // price，成交价格
                    "q": "0.21",              // qty，成交数量
                    "b": true                 // 方向(buyerMaker)
                }
            }
        title: Response
        language: json
---
