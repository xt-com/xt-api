---
title: 响应报文格式
position_number: 3
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
                "id": "{id}",   //请求回调ID
                "code": 1,      //结果0=成功;1=失败;2=listenKey⽆效
                "msg": ""
            }
        title: 响应报文格式
        language: javascript
right_code_blocks:
    -
        code_block: '{"id":"123", "code": 0, "msg": "success"}   '
        title: Response-成功
        language: json
    -
        code_block: '{"id":"123", "code": 401, "msg": "token expire"}'
        title: response-token失效
        language: json
---
