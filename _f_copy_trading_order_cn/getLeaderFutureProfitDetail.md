---
title: 获取预计待分润明细
position_number: 5
type: get
description: /v1/copy-trade/my-profit-future
parameters:
    -
        name: direction
        type: string
        mandatory: false
        default:
        description: 方向(NEXT, PREV)
        ranges:
    -
        name: limit
        type: number
        mandatory: false
        default:
        description: 翻页大小
        ranges: 10
    -
       name: id
       type: number
       mandatory: false
       default:
       description: id
       ranges:
content_markdown: >-
    #### **限流规则**

    10/s/apikey
left_code_blocks:
    -
        code_block:
        title: Java
        language: java
    -
        code_block:
        title: Python
        language: python
right_code_blocks:
    -
        code_block: |-
                    {
                    "returnCode": 0,
                    "msgInfo": "success",
                    "error": null,
                    "result": {
                    "hasPrev": false,
                    "hasNext": false,
                    "items": [{
                    "avatar": "string", // 头像
                    "name": "string", // 用户名称
                    "profit": 5, // 分润数量
                    "profitTime": "LocalDateTime", // 日期
                    "coin": 0, // 币种
                    "id":  // id
                    }]
                    }
                    }
        title: Response
        language: json
---
