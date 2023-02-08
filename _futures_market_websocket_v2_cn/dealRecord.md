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
                    "s":"btc_index", //交易对
                    "p":"50000",    //价格
                    "a":"0.1"   //数量
                    "m": "BID"   //成交方向  BID 买 ASK卖
                    "t":123124124   //时间戳
                }
            }
        title: Response
        language: json
---
