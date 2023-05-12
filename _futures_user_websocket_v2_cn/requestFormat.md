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
        subscribe:
        ```js
          {
           "method": "SUBSCRIBE/UNSUBSCRIBE",
           "params": [
                  "{order}@{listenKey}",
                  "{trade}@{listenKey}",
                  "{balance}@{listenKey}",
                  "{position}@{listenKey}",
                  "{notify}@{listenKey}"
                ],
           "id": "{id}"    //用户自己定义
           }
        ```
left_code_blocks:
    -
        code_block: 
        title: 订阅
        language: javascript
    -
        code_block: |-
                {
                    "method": "unsubscribe", 
                    "params": [
                        "{topic}@{arg}"
                    ], 
                    "id": "{id}"   //回调ID
                }
        title: 取消订阅
        language: javascript
right_code_blocks:
    -
        code_block: |-
               {"method":"SUBSCRIBE",
                "params":["order@A246C3DF8EE532DC75007BC5D86698541678596355681"],
                "id":"test1"
               }
        title: Response
        language: json
---
