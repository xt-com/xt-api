---
title: 订阅
position_number: 1
type:
description:
parameters:
    -
        name:
        type:
        mandatory: false
        default:
        description:
        ranges:
content_markdown: |-
left_code_blocks:
    -
      code_block: |-
         {
          "id": "{id}",   //用户自己定义
          "method": "SUBSCRIBE",
          "params": [
               "order@{listenKey}",
               "trade@{listenKey}",
               "balance@{listenKey}",
               "position@{listenKey}",
               "notify@{listenKey}"
           ]
         }
      title: 订阅
      language: javascript
    -
       code_block: |-
          {
            "id": "{id}",   //用户自己定义
            "method": "UNSUBSCRIBE",
            "params": [
                 "login@{listenKey}",
                 "trade@{listenKey}",
                 "balance@{listenKey}",
                 "position@{listenKey}",
                 "notify@{listenKey}"
           ]
           }
       title: 取消订阅
       language: javascript
right_code_blocks:
     -
        code_block: '{"method":"SUBSCRIBE","params":["order@A246C3DF8EE532DC75007BC5D86698541678596355681"],"id":"test1"}   '
        language: json
---
