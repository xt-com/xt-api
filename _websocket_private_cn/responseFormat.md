---
title: 响应报⽂格式
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
                    "code": 1,      //结果1=成功;0=失败;2=listenKey⽆效
                    "msg": ""
                }
        title: 格式
        language: javascript
right_code_blocks:
    -
        code_block:
        title: Response
        language: json
---
