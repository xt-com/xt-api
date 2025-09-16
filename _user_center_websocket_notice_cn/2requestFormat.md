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
content_markdown:
left_code_blocks:
    -
        code_block: |-
                {
                    "method": "subscribe", 
                    "params": [
                        "{topic}@{arg},{arg}", 
                        "{topic}@{arg}"
                    ], 
                    "id": "{id}"    //回调ID
                }
        title: 订阅
        language: javascript
    -
        code_block: |-
                {
                    "method": "unsubscribe", 
                    "params": [
                        "{topic}@{arg},{arg}"
                    ], 
                    "id": "{id}"   //回调ID
                }
        title: 取消订阅
        language: javascript
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
