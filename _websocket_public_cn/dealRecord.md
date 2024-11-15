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
                    "s": "btc_usdt",           //symbol
                    "i": 6316559590087222000,  //成交id
                    "t": 1655992403617,        //时间
                    "oi": 6616559590087222666, //订单id
                    "p": "43000",              //价格
                    "q": "0.21",               //数量
                    "v": "9030"                //金额
                    "b": true                  //是否是buyerMaker
                }
            }
        title: Response
        language: json
---
