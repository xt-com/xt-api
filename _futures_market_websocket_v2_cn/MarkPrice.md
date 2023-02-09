---
title: 标记价格
position_number: 15
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

    语法: mark_price@\{symbol\}

    示例: mark_price@btc\_usdt
    
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
                    "topic": "mark_price", 
                    "event": "mark_price@btc_usdt", 
                    "data": {
                        "s":"btc_usdt", //交易对
                        "p":"50000",    //价格
                        "t":123124124   //时间戳
                    }
                }
        title: Response
        language: json
---
