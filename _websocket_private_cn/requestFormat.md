---
title: 请求报文格式
position_number: 2
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
    **param结构**

    \{topic\}@\{arg\},\{arg\},…
left_code_blocks:
    -
        code_block: |-
                {
                    "method": "subscribe", 
                    "params": [
                        "{topic}@{arg},{arg}",    //event
                        "{topic}@{arg}"
                    ], 
                    "listenKey": "512312356123123123",   //监听Key，先通过/v4/ws-token接⼝获取accessToken
                    "id": "{id}"
                }
        title: 订阅
        language: javascript
    -
        code_block: |-
            {
                "method": "unsubscribe", 
                "params": [
                    "{topic}@{arg},{arg}",    //event
                    "{topic}@{arg}"
                ], 
                "listenKey": "512312356123123123",   //监听Key，先通过/v4/ws-token接⼝获取accessToken
                "id": "{id}"
            }
        title: 取消订阅
        language: javascript
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
