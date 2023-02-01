---
title: 推送报文格式
position_number: 4
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
content_markdown:
left_code_blocks:
    -
        code_block: |-
            {
                "topic": "trade",             //事件
                "event": "trade@btc_usdt",    //主题
                "data": { }                   //数据
            }
        title: 格式
        language: javascript
right_code_blocks:
    -
        code_block: |-
                {
                    "topic": "trade", 
                    "event": "trade@btc_usdt", 
                    "data": {
                        "s": "btc_usdt", 
                        "i": 6316559590087222000, 
                        "t": 1655992403617, 
                        "p": "43000", 
                        "q": "0.21", 
                        "b": true
                    }
                }
        title: 成交记录(实时推送报文)样例
        language: json
---
